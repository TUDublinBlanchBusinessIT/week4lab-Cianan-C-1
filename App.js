import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [fm, setFm] = useState('D');
  const [ma, setMa] = useState('D');
  const [ooap, setOoap] = useState('D');
  const [dm, setDm] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;
  
  function clickMe(){
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the studnet's gradePointsfor SSWD, multiply it by the credits 
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)
    totalGradeScores += (gradePoints [sswd] * credits);
    
    //get the student's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
    totalGradeScores += (gradePoints [ob] * credits);
    
    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)

    totalGradeScores += (gradePoints [fm] * credits);

    totalGradeScores += (gradePoints [ma] * credits);

    totalGradeScores += (gradePoints [ooap] * credits);

    totalGradeScores += (gradePoints [dm] * credits);

    gpa = totalGradeScores / totalPossibleCredits
    alert("Your GPA is " + gpa);
    Alert.alert("Your GPA is " + gpa);
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "centre",
    padding: "2px"
  },
  row: {
    flexDirection: "row",
    alignItems: "centre",
    marginTop: "4px"

  },
  label: {
    flex: "1",
    alignItems: "centre",
    marginTop: "10px",
    padding: "2px"
  },
  textInput: {
    flex: "2",
    border: "1px solid black",
    padding: "2px",
    alignItems: "centre"
  }
});

return (
    <SafeAreaView>
      <View style={styles.row}><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>
      <View style={styles.row}>
        <Text>Maths</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setSswd}/>
      </View>
      <View style={styles.row} >
        <Text>Organisational Behaviour</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row} >
        <Text>Financial Management</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row} >
        <Text>Mobile Applications</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row} >
        <Text>Object Oriented Design</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row} >
        <Text>Digital Marketing</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row}>
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}


