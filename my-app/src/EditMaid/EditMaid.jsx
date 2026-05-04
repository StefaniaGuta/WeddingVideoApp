import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { editMaid } from '../redux/maids/operation';

const EditMaidPopUp = ({oneMaid}) => {
    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        try {
            const formData = {...values}
            const response = await dispatch(editMaid({id: oneMaid._id, formData}))
            if(response.payload.updatedMaid){
                window.location.reload(false);
            }
            return response.payload.updatedMaid
        } catch(e) {
            console.log(e)
        }
    }
    const initialValues = {
        name: oneMaid.name || '',
        partener: oneMaid.partner || '',
        rol: oneMaid.rol || ''
    }
    return (
        <div>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field
                        name='name'
                        type='text'
                        placeholder='enter the name'
                    />
                    <Field
                    name="partner"
                    placeholder="Enter the partner"
                    type="text"
                    />
                    <Field
                    name="rol"
                    placeholder="Change the role"
                    type="text"
                    />
                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>
    )
}
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    ),
    
  partner: yup
  .string()
  .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid format'
    ),
    rol: yup
  .string()
  .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid format'
    )
    

});
export default EditMaidPopUp