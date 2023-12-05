export interface YourDataType {
    username: string;
    profession: {
        name: string;
        level: string;
        salary: number;
        skills: string[];
        course: {
            name: string;
            description: string;
            course_cost_full: number;
            course_per_month: number;
            link_course: string;
        }[];
    }[];
    course: {
        name: string;
        description: string;
        course_cost_full: number;
        course_per_month: number;
        link_course: string;
    }[];
    vacancy: any[]; // Измените тип по мере необходимости
}
