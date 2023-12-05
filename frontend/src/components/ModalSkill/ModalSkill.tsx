import React, { useEffect, useState } from 'react';
import { api } from '../../utils/Api/Api';
import { YourDataType } from '../../utils/Api/ApiConst'

const ModalSkill: React.FC = () => {
    const [test, setTest] = useState<YourDataType[] | null>(null);



    useEffect(() => {
        api
            .getInitialTracker()
            .then((data: YourDataType[]) => setTest(data))
            .catch((err) => console.log(`Ошибка ${err}`));
    }, []);

    return (
        <div>
            {test && test.map((item, index) => (
                <div key={index}>
                    <h1>{item.username}</h1>
                    {item.profession.map((profession, profIndex) => (
                        <div key={profIndex}>
                            <h2>{profession.name}</h2>
                            <p>Level: {profession.level}</p>
                            <p>Salary: {profession.salary}</p>
                            <ul>
                                {profession.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                            <h3>Courses:</h3>
                            {profession.course.map((course, courseIndex) => (
                                <div key={courseIndex}>
                                    <h4>{course.name}</h4>
                                    <p>Description: {course.description}</p>
                                    <p>Full Cost: {course.course_cost_full}</p>
                                    <p>Per Month: {course.course_per_month}</p>
                                    <a href={course.link_course} target="_blank" rel="noopener noreferrer">Link</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ModalSkill;