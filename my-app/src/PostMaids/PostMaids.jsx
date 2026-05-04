import {Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {postMaids} from '../redux/maids/operation';
import { useDispatch } from 'react-redux';


const PostMaids = () => {
    const dispatch = useDispatch()
     const handleSubmit = async (values) => {
            try{
                let formData = {
                    ...values,
                };
                const response = await dispatch(postMaids(formData));
                if(response.payload){
                    window.location.reload(false);
                }
                return response.payload
            } catch(e){
                console.log(e)
            }
        }
    return (
            <div>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        name: '',
                        partner: '',
                        rol: ''
                    }}
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
                        placeholder="Enter the role"
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


export default PostMaids;