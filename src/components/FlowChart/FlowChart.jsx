import { LineChart, Line,XAxis,YAxis } from 'recharts';

const FlowChart = () => {
      const studentsMarks =[
            {"name": "Student1", "math": 85, "physics": 78, "chemistry": 92},
            {"name": "Student2", "math": 90, "physics": 88, "chemistry": 85},
            {"name": "Student3", "math": 76, "physics": 80, "chemistry": 78},
            {"name": "Student4", "math": 89, "physics": 84, "chemistry": 91},
            {"name": "Student5", "math": 95, "physics": 90, "chemistry": 88},
            {"name": "Student6", "math": 78, "physics": 76, "chemistry": 80},
            {"name": "Student7", "math": 82, "physics": 85, "chemistry": 87},
            {"name": "Student8", "math": 88, "physics": 92, "chemistry": 93},
            {"name": "Student9", "math": 91, "physics": 89, "chemistry": 90},
            {"name": "Student10", "math": 84, "physics": 83, "chemistry": 86}
      ]
      return (
            <div>
                 <LineChart width={500} height={400} data={studentsMarks}>
                  <XAxis dataKey="name"/>
                  <YAxis></YAxis>
                 <Line dataKey="math" stroke='green'></Line>
                 <Line dataKey="physics" stroke='red'></Line>
                 {/* <Line dataKey="chemistry" stroke='blue'></Line> */}
                  </LineChart> 
            </div>
      );
};

export default FlowChart;