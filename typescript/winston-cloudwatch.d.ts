declare module "winston-cloudwatch" {
  import * as Transport from "winston-transport";

  interface CloudWatchTransportOptions extends Transport.TransportStreamOptions {
    logGroupName?: string;
    retentionInDays?: number;
    logStreamName?: string;
    awsAccessKeyId?: string;
    awsSecretKey?: string;
    awsRegion?: string;
    proxyServer?: string;
    uploadRate?: number;
    jsonMessage?: boolean;
  }

  interface CloudWatchTransportInstance extends Transport {
    level: string;
    name: string;
    logGroupName?: string;
    retentionInDays: number;
    logStreamName?: string;
    awsAccessKeyId?: string;
    awsSecretKey?: string;
    awsRegion?: string;
    proxyServer?: string;
    uploadRate: number;
    new(options?: CloudWatchTransportOptions): CloudWatchTransportInstance;
  }

  const CloudWatchTransport: CloudWatchTransportInstance;

  export = CloudWatchTransport;
}
