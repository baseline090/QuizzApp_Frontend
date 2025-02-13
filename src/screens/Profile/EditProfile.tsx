// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import * as Yup from 'yup';
// import {Formik} from 'formik';
// import {useSelector} from 'react-redux';
// import {RootState} from '../../redux/store';

// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../types';

// const EditProfile = () => {
//   const {loading} = useSelector((state: RootState) => state.auth);
//   const [imageUri, setImageUri] = useState<string | null>(null);
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const user = useSelector((state: RootState) => state.auth.user);

//   const initialValues = {
//     firstName: user?.fullName || '',
//     username: user?.username || 'Test123',
//     email: user?.email || '',
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required('First Name is required'),
//     username: Yup.string().required('Username is required'),

//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//   });

//   const handleSave = async (values: any) => {
//     try {
//       Alert.alert('Success', 'Profile updated successfully!');
//       navigation.goBack();
//     } catch (error) {
//       Alert.alert('Error', 'Failed to update profile. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSave}>
//           {({
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             values,
//             errors,
//             touched,
//           }) => (
//             <View style={styles.formContainer}>
//               <View style={styles.formInputContainer}>
//                 <View style={styles.profileContainer}>
//                   <TouchableOpacity
//                     onPress={() => {
//                     }}
//                     style={styles.profileContainer}>
//                     <Image
//                       source={require('../../assets/card/img1.jpg')}
//                       style={styles.avatar}
//                     />

//                   </TouchableOpacity>
//                 </View>

//                 {/* First Name */}
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>First Name</Text>
//                   <TextInput
//                     style={styles.input}
//                     onChangeText={handleChange('firstName')}
//                     onBlur={handleBlur('firstName')}
//                     value={values.firstName}
//                     placeholder="Enter your first name"
//                   />
//                   {touched.firstName && errors.firstName && (
//                     <Text style={styles.errorText}>{errors.firstName}</Text>
//                   )}
//                 </View>

//                 {/* Username */}
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>Username</Text>
//                   <TextInput
//                     style={styles.input}
//                     onChangeText={handleChange('username')}
//                     onBlur={handleBlur('username')}
//                     value={values.username}
//                     placeholder="Enter your username"
//                   />
//                   {touched.username && errors.username && (
//                     <Text style={styles.errorText}>{errors.username}</Text>
//                   )}
//                 </View>

//                 {/* Email */}
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>Email</Text>
//                   <TextInput
//                     style={styles.input}
//                     onChangeText={handleChange('email')}
//                     onBlur={handleBlur('email')}
//                     value={values.email}
//                     placeholder="Enter your email"
//                     keyboardType="email-address"
//                   />
//                   {touched.email && errors.email && (
//                     <Text style={styles.errorText}>{errors.email}</Text>
//                   )}
//                 </View>

//                 {/* Save Button */}
//                 <TouchableOpacity
//                   style={[styles.button, loading && {opacity: 0.6}]}
//                   onPress={() => handleSubmit()}
//                   disabled={loading}>
//                   {loading ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.buttonText}>Save</Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         </Formik>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   cameraIconText: {
//     marginTop: 10,
//     color: '#FF681F',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   formContainer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   formInputContainer: {
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     // shadowColor: '#000',
//     // shadowOpacity: 0.1,
//     // shadowRadius: 10,
//     // elevation: 5,
//     alignItems: 'center',
//   },
//   inputContainer: {
//     marginBottom: 15,
//     width: '100%',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#000000',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingLeft: 10,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   button: {
//     backgroundColor: '#FF681F',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default EditProfile;

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  launchImageLibrary,
  Asset,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const EditProfile = ({ route, navigation }: any) => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const { profileData } = route.params;
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const initialValues = {
    firstName: profileData?.fullName || '',
    username: profileData?.username || '',
    email: profileData?.email || '',
    phoneNumber: profileData?.phoneNumber || '',
  };

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset: Asset = response.assets[0];
        if (asset.uri) {
          setSelectedImage(asset.uri);
        }
      }
    });
  };

  const handleSave = async (values: any) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Error', 'No token found, please login again.');
        return;
      }

      const formData = new FormData();
      formData.append('fullName', values.firstName);
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('phoneNumber', values.phoneNumber);
      if (selectedImage) {
        console.log('selectedImage3333: ', selectedImage);
        const imageName = selectedImage.split('/').pop() || 'profile-pic.jpg';
        formData.append('profilePic', {
          uri: selectedImage,
          name: imageName,
          type: 'image/jpeg',
        });
      }

      console.log('Submitting form data...');
      const response = await axios.put(
        'https://quizz3.onrender.com/api/user/profile/update',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Profile updated successfully!');
        const cacheBustedUri = `${response.data.profilePicUrl}?timestamp=${new Date().getTime()}`;
        setSelectedImage(cacheBustedUri);
      } else {
        Alert.alert('Error', 'Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik initialValues={initialValues} onSubmit={handleSave}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <View style={styles.profileContainer}>
                <TouchableOpacity onPress={selectImage}>
                  {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.avatar} />
                  ) : (
                    <Image
                      source={require('../../assets/card/img1.jpg')}
                      style={styles.avatar}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {/* First Name */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  placeholder="Enter your first name"
                />
              </View>

              {/* Username */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  placeholder="Enter your username"
                />
              </View>

              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              </View>

              {/* Phone Number */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              </View>

              {/* Save Button */}
              <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.6 }]}
                onPress={() => handleSubmit()}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF681F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfile;
