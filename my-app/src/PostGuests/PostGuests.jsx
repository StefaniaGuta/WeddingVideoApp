import {Formik, Form, Field, useFormikContext } from 'formik';
import * as yup from 'yup';
import { postGuests } from '../redux/operations';
import { useDispatch } from 'react-redux';

const DarField = () => {
  const { values } = useFormikContext();

  return (
    <>
      {values.nunta === "true" && (
        <label>
          Dar
          <Field
            name="dar"
            placeholder="Enter the sum"
            type="text"
          />
        </label>
      )}
    </>
  );
};


const PostGuests = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = async (values) => {
        try{
            let formData = {
                ...values,
                nunta: values.nunta === 'true' || values.nunta === true,
            };
            const response = await dispatch(postGuests(formData));
            if(response.payload){
                window.location.reload(false);
            }
            return response.payload
        } catch(e){
            console.log(e)
        }
    }
return (
    <Formik
        initialValues={{
            name: '',
            dar: '',
            nunta: ''
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
    >
        <Form>
            <label>
                Name
                <Field
                name="name"
                placeholder="Enter guest name"
                type="text"
                />
            </label>
            

                <label>
                <Field type="radio" name="nunta" value="true" />
                True
                </label>
                <label>
                <Field type="radio" name="nunta" value="false" />
                False
                </label>
                
                <DarField />
  
                <button type='submit'>Add</button>
            </Form>
    </Formik>
)
}

const schema = yup.object().shape({
    name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    )
    .required(),
    dar: yup.string(),
    nunta: yup.boolean().required()
})


export default PostGuests;