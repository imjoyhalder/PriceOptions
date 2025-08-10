import React from 'react';
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    
    const mathMarksData = [
        { "id": 1, "name": "Arafat", "math_marks": 78, "physics_marks": 74, "chemistry_marks": 69 },
        { "id": 2, "name": "Tania", "math_marks": 85, "physics_marks": 79, "chemistry_marks": 82 },
        { "id": 3, "name": "Sakib", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 91 },
        { "id": 4, "name": "Jui", "math_marks": 67, "physics_marks": 64, "chemistry_marks": 70 },
        { "id": 5, "name": "Rafi", "math_marks": 74, "physics_marks": 72, "chemistry_marks": 76 },
        { "id": 6, "name": "Mim", "math_marks": 88, "physics_marks": 85, "chemistry_marks": 90 },
        { "id": 7, "name": "Nayeem", "math_marks": 81, "physics_marks": 78, "chemistry_marks": 84 },
        { "id": 8, "name": "Sumaiya", "math_marks": 95, "physics_marks": 91, "chemistry_marks": 93 },
        { "id": 9, "name": "Joy", "math_marks": 89, "physics_marks": 87, "chemistry_marks": 88 },
        { "id": 10, "name": "Shuvo", "math_marks": 72, "physics_marks": 69, "chemistry_marks": 74 }
      ]
      
      
      

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey={'math_marks'} stroke='red'></Line>
                <Line dataKey={'physics_marks'} stroke='green'></Line>
                <Line dataKey={'chemistry_marks'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;