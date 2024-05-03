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

  addEnvVariable: (app, key, value) => set((state) => ({ envVariables: { ...state.envVariables, [app]: [ ...state.envVariables[app], { key, value } ] } })),
  editEnvVariable: (app, key, value) => set((state) => ({ envVariables: { ...state.envVariables, [app]: [ ...state.envVariables[app].filter((v) => v.key !== key), { key, value } ] } })),
}));

function getInitialEnvVariables() {
  const savedVariables = window.localStorage.getItem("envVariables");
  if (!savedVariables) return {};

  try {
    const parsedVariables = JSON.parse(savedVariables);
    return parsedVariables;
  } catch (error) {
    console.error("Error while parsing localStorage data:", error);
    return {};
  }
}

export default useApplicationsStore;
