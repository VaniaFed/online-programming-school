const sendDataToServer = (url: any, data: any) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const addCourseRequest = (data: any) => {
    sendDataToServer('/addCourse', data);
};

export const addStudentRequest = (data: any) => {
    sendDataToServer('/addStudent', data);
};
