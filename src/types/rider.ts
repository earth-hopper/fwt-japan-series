export interface Rider {
    id: string;
    rider: string;
    discipline: string;
    nation: string;
    best: number;
    next: number;
    point: number;
    profile?: string;
    riding?: string;
    results?: string;
    comment?: string;
    [key: string]: any;
  }