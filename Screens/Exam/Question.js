import React from 'react'
import { View } from "react-native";
import { RadioButton, Text } from 'react-native-paper';

function Question(props) {
	const {
		index,
		question,
		choices,
		correctAnswer,
		handleAnswers

	} = props

	const [value, setValue] = React.useState('');

	return (
		<View>
			<Text>QUESTION {index}: {question} </Text>
			<RadioButton.Group onValueChange={newValue => {setValue(newValue); handleAnswers(index, newValue)}} value={value}>
		      <View>
		        <Text>{choices[0]}</Text>
		        <RadioButton value="a" />
		      </View>
		      <View>
		        <Text>{choices[1]}</Text>
		        <RadioButton value="b" />
		      </View>
		      <View>
		        <Text>{choices[2]}</Text>
		        <RadioButton value="c" />
		      </View>
		      <View>
		        <Text>{choices[3]}</Text>
		        <RadioButton value="d" />
		      </View>
		    </RadioButton.Group>
		</View>
	)
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';

// const Example = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         picked: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <div id="my-radio-group">Picked</div>
//           <div role="group" aria-labelledby="my-radio-group">
//             <label>
//               <Field type="radio" name="picked" value="One" />
//               One
//             </label>
//             <label>
//               <Field type="radio" name="picked" value="Two" />
//               Two
//             </label>
//             <div>Picked: {values.picked}</div>
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// ReactDOM.render(<Example />, document.getElementById('root'));


export default Question