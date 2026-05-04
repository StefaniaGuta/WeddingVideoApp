import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { editGuest } from '../redux/operations';

const EditGuestModal = ({guest}) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
    try{
        const formData = {
          ...values,
          nunta: values.nunta === 'true' || values.nunta === true,
        };
    
        const response = await dispatch(editGuest({
          id: guest._id,
          formData,
        }));
        window.location.reload(false);
        return response.payload;
    } catch(e){
        console.log(e)
    }
  };

    const initialValues={
           name: guest.name || "",
            dar: guest.dar || "",
            nunta: guest.nunta ? 'true' : 'false',
        }

    return (
        <section style={{width: '530px', height: '150px', backgroundColor: 'red' }}>
        Edit Guest Modal
        <p>{guest.name}</p>
        <Formik 
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
            <Form>
                <Field
                name="name"
                placeholder="Enter guest name"
                type="text"
                />

                <Field
                name="dar"
                placeholder="Enter the sum"
                type="text"
                />

                <label>
                <Field type="radio" name="nunta" value="true" />
                True
                </label>
                <label>
                <Field type="radio" name="nunta" value="false" />
                False
                </label>
  
                <button type='submit'>Edit</button>
            </Form>
        </Formik>
        </section>
    )
}

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    ),
  dar: yup
    .string(),
  nunta: yup
    .boolean()

});

export default EditGuestModal;