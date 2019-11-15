const fetchTeachers = async () => {
    const teachers = await fetch('/api/teachers', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(json => json.json());
    return teachers.teachers;
};

export const getTeachers = () => {
    const teachers = fetchTeachers();
    return teachers;
};
