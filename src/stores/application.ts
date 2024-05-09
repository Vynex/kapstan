import { create } from "zustand"

type AppStoreType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  applications: Array<object>;
  setApplications: (apps: Array<object>) => void;

  selectedApplication: null | object;
  changeApplication: (app: object) => void;

  envVariables: { [key: string]: Array<{ key: string; value: string; }> };
  setEnvVariables: (app: string, variables: Array<{ key: string; value: string; }>) => void;
  rmEnvVariable: (app: string, key: string) => void;

  addEnvVariable: (app: string, key: string, value: string) => void;
  editEnvVariable: (app: string, key: string, value: string) => void;
};

const useApplicationsStore = create<AppStoreType>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),

  applications: [],
  setApplications: (applications) => set({ applications, selectedApplication: applications[0] }),

  selectedApplication: null,
  changeApplication: (selectedApplication) => set({ selectedApplication }),

  envVariables: getInitialEnvVariables(),
  setEnvVariables: (app, variables) => set((state) => {
    const allVariables = ({ envVariables: { ...state.envVariables, [app]: variables } });
    localStorage.setItem("envVariables", JSON.stringify(allVariables.envVariables));
    return allVariables;
  }),
  rmEnvVariable: (app, key) => set((state) => {
    const allVariables = ({ envVariables: { ...state.envVariables, [app]: state.envVariables[app].filter((v) => v.key !== key) } });
    localStorage.setItem("envVariables", JSON.stringify(allVariables.envVariables));
    return allVariables;
  }),

  addEnvVariable: (app, key, value) => set((state) => {
    const allVariables = ({ envVariables: { ...state.envVariables, [app]: [ ...(state.envVariables[app] || []), { key, value } ] } });

    // quick hack to ensure uniqueness between all environment variables

    // using a map to store variables against an applicationId
    const applicationMap = new Map();

    // envVariables key has the strucutre of { [applicationID]: [ { key, value }, ... ] };
    Object.keys(allVariables.envVariables).forEach(app => {
      const variableMap = new Map();

      // iterating over each object in appId's array and setting it to a map to ensure uniqueness
      allVariables.envVariables[app].forEach(({ key, value }) => variableMap.set(key, value));

      // storing the unique variable Map against the applicationId
      applicationMap.set(app, variableMap);
    });

    // replicating the original structure of the variables

    // using an object to store applicationIds against array of env. variables
    const uniqueAppVars = {};

    applicationMap.forEach((variables, appId) => {
      const uniqueVars = [];

      // since variables is a Map, it will only consist of unique keys
      // hence we can safely iterate through all of them and push them to a unique array
      variables.forEach((value, key) => {
        uniqueVars.push({ key, value });
      });

      // assigning the array against an appId
      uniqueAppVars[appId] = uniqueVars;
    });

    // stringifying the object and saving it to localStorage
    localStorage.setItem("envVariables", JSON.stringify(allVariables.envVariables));
    return { envVariables: uniqueAppVars };
  }),
  editEnvVariable: (app, key, value) => set((state) => ({ envVariables: { ...state.envVariables, [app]: [ ...state.envVariables[app].filter((v) => v.key !== key), { key, value } ] } })),
}));

function getInitialEnvVariables() {
  const savedVariables = window.localStorage.getItem("envVariables");
  if (!savedVariables) return {};

  try {
    const parsedVariables = JSON.parse(savedVariables);
    console.log("savedVariables",parsedVariables)
    return parsedVariables;
  } catch (error) {
    console.error("Error while parsing localStorage data:", error);
    return {};
  }
}

export default useApplicationsStore;
