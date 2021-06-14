export interface iFlow {
  id: string;
  name: string;
}

export interface iStep {
  id: string;
  type: eStepType;
  name: string;
  flow: iFlow;
  goto: iStep[];
  payload: iPayload;
}

export enum eStepType {
  message = 'message',
  response = 'response',
}

export interface iPayload {
  message?: string;
}
