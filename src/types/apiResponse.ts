export type APIResponseType = {
  status: string;
  usage: UsageType;
  operation_id: string;
  photos: PhotoType[];
};

type UsageType = {
  limit: number;
  used: number;
  remaining: number;
  reset_time: number;
  reset_time_text: string;
};

export type PhotoType = {
  height: number;
  width: number;
  pid: string;
  url: string;
  tags: TagType[];
};

type TagType = {
  attributes: { face: { value: string; confidence: number } };
  center: { x: number; y: number };
  confirmed: boolean;
  eye_left: ItemData;
  eye_right: ItemData;
  height: number;
  label: any;
  manual: boolean;
  mouth_center: ItemData;
  nose: ItemData;
  pitch: number;
  points: any;
  recognizable: boolean;
  roll: number;
  similarities: any;
  tid: string;
  uids: any[];
  width: number;
  yaw: number;
};

type ItemData = {
  confidence: number;
  id: number;
  x: number;
  y: number;
};
