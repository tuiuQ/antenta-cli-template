export interface power {
  sid: string;
  tts: string;
  content: string;
  note: string;
  dateline: string;
  tags: Array<string>;
}

export interface Banner {
  imageUrl: string;
  targetId: number;
  typeTitle: string;
  url: string; 
}