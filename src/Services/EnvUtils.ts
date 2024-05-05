class EnvUtilsClass {

  private appName: string;

  private appVersion: string;

  private apiHost: string;

  private searchJobsApi: string;

  constructor() {
    this.appName = process.env.REACT_APP_NAME || '';
    this.appVersion = process.env.REACT_APP_VERSION || '';
    this.apiHost = process.env.REACT_APP_API_HOST || '';
    this.searchJobsApi = process.env.REACT_APP_API_SEARCH_JOBS || '';
  }

  getAppName = (): string => this.appName;

  getAppVersion = (): string => this.appVersion;

  getApiHost = (): string => this.apiHost;

  getSearchJobsApi = (): string => this.searchJobsApi;
}

const EnvUtils = new EnvUtilsClass();
export default EnvUtils;
