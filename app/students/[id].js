import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StudentProfile from '../../components/students/StudentProfile';
import EditStudentForm from '../../components/EditStudentForm';
// import { fetchStudentDetails, deleteStudent, updateStudent } from '../../api';

const StudentDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [student, setStudent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            // fetchStudentDetails(id).then(data => setStudent(data));
            // Mock data for now
            setStudent({ id, name: 'Jane Doe', class: '10B', /* other details */ });
        }
    }, [id]);

    const handleEdit = (updatedStudent) => {
        // updateStudent(updatedStudent).then(() => {
            // Update the student state
            setStudent(updatedStudent);
            setIsEditing(false);
        // });
    };

    const handleDelete = () => {
        // deleteStudent(student.id).then(() => {
            // Redirect to the students list page
            router.push('/students');
        // });
    };

    if (!student) return <div>Loading...</div>;

    return (
        <div>
            {isEditing ? (
                <EditStudentForm student={student} onSave={handleEdit} onCancel={() => setIsEditing(false)} />
            ) : (
                <>
                    <StudentProfile student={student} />
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default StudentDetailPage;
