import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

export const DD_RUM = () => {
  return datadogRum.init({
    applicationId: "c7b98ca2-09e4-4bb8-996a-121f53209678",
    clientToken: "pub1329271b66983acaa0423be7a1c1be13",
    site: "datadoghq.com",
    service: "x-subdomain test",
    env: "testing",
    version: "resource",
    sampleRate: 100,
    silentMultipleInit: true,
    replaySampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true,
    replaySampleRate: 100
  });
};

export const DD_LOGS = () => {
  return datadogLogs.init({
    clientToken: "pub1329271b66983acaa0423be7a1c1be13",
    site: "datadoghq.com",
    service: "x-subdomain test",
    env: "testing",
    version: "resource",
    sampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true,
    forwardErrorsToLogs: true,
    silentMultipleInit: true
  });
};
