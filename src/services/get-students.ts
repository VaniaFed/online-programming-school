const fetchStudents = async () => {
    const students = await fetch('/api/students', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(json => json.json());
    return students.students;
};

export const getStudents = () => {
    const students = fetchStudents();
    return students;
};
