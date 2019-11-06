const fetchCourses = async () => {
    const courses = await fetch('/api/courses', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(json => json.json());
    return courses.courses;
};

export const getCourses = async () => {
    const courses = fetchCourses();
    return courses;
};
