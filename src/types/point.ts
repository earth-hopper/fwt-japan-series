export interface PointTier {
    rank: number;
    star4: number;
    star3: number;
    star2: number;
    star1: number;
  }
  
  export type CategoryKey = 'QUALIFIER' | 'JUNIOR';
  export type DisciplineKey = 'SKI MEN' | 'SKI WOMEN' | 'SNOWBOARD MEN' | 'SNOWBOARD WOMEN';
  
  export interface PointsByDiscipline {
    QUALIFIER: PointTier[];
    JUNIOR: PointTier[];
  }
  
  export type PointsData = Record<string, PointsByDiscipline>;