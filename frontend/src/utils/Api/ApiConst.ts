export interface YourDataType {
  username: string;
  name: string;
  profession: {
    name: string;
    level: string;
    salary: number;
    direction_training: string;
    recommendation_course: [
      { name: string }
    ];
    skills: string[];
    course: {
      name: string;
      description: string;
      course_cost_full: number;
      course_per_month: number;
      link_course: string;
    }[];
  }[];
  my_course: {
    name: string;
    description: string;
    course_cost_full: number;
    course_per_month: number;
    link_course: string;
    skills: {
      not_mastered: string[];
      mastered: string[];
    };
  }[];
  vacancy: any[]; // Измените тип по мере необходимости
}


export interface Skill {
  p: string;
  color: {
    backgroundColor: string;
    borderRadius: string;
  };
  name: string[] | null;
}