import axios, { AxiosError } from "axios";
import axiosRetry from "axios-retry";

export const endpointGeo = axios.create({ baseURL: "https://ipapi.co" });

/* https://stackoverflow.com/a/64096698/11986604 */
export function retryAxios(): void {
  axiosRetry(endpointGeo, {
    retryCondition: (e) => {
      return (
        axiosRetry.isNetworkOrIdempotentRequestError(e) ||
        e.response?.status === 429
      );
    },
    retryDelay: (
      retryCount: number,
      error: AxiosError<unknown, unknown>
    ): number => {
      if (error.response) {
        const retry_after = error.response.headers["retry-after"];
        if (retry_after) {
          return parseInt(retry_after);
        } else {
          return retryCount * 1000;
        }
      }

      // Can also just return 0 here for no delay if one isn't specified
      return axiosRetry.exponentialDelay(retryCount);
    },
  });
}
