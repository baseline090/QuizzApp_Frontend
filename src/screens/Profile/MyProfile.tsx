import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';  
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';



const MyProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user = useSelector((state: RootState) => state.auth.user);
 

 
  // useEffect(() => {

  //   navigation.setOptions({
  //     title: 'My Profile',
  //     headerRight: () => (
  //       <Icon 
  //         name="edit" 
  //         size={24} 
  //         color="#000" 
  //         style={{ marginRight: 20 }} 
  //         onPress={() => navigation.navigate('EditProfile')} 
  //       />
  //     ),
  //   });
  // }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
    {/* <View style={styles.profileContainer}>
      <Image
        source={ require('../../assets/card/img1.jpg')}
        style={styles.avatar}
      />
    </View> */}
    <View style={styles.detailsContainer}>
      <Icon name="user" size={20} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.detailsHeader}>Name</Text>
        <Text style={styles.detailsDesc}>{user ? user.fullName : 'Guest'}</Text>
      </View>
    </View>
    
    <View style={styles.detailsContainer}>
      <Icon name="envelope" size={20} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.detailsHeader}>Email Address</Text>
        <Text style={styles.detailsDesc}>{user ? user.email : 'Guest'}</Text>
      </View>
    </View>
    
    <View style={styles.detailsContainer}>
      <Icon name="phone" size={20} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.detailsHeader}>Phone Number</Text>
        <Text style={styles.detailsDesc}>9854758695</Text>
      </View>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  detailsContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  detailsHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  detailsDesc: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
});

export default MyProfile;



// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';  
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../types';

// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MyProfile = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const [userData, setUserData] = useState<any | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = await AsyncStorage.getItem('userToken');
//       try {
//         const response = await axios.get('https://quizz3.onrender.com/api/user/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data.profile);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();

//     navigation.setOptions({
//       title: 'My Profile',
//       headerRight: () => (
//         <Icon
//           name="edit"
//           size={24}
//           color="#000"
//           style={{ marginRight: 20 }}
//           onPress={() => navigation.navigate('EditProfile', { profileData: userData })}
//         />
//       ),
//     });
//   }, [navigation, userData]);

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#000" />
//       </SafeAreaView>
//     );
//   }


//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.profileContainer}>
//         {/* <Image
//           source={require('../../assets/card/img1.jpg')}
//           style={styles.avatar}
//         /> */}
//       </View>

//       <View style={styles.detailsContainer}>
//         <Icon name="user" size={20} color="#000" style={styles.icon} />
//         <View style={styles.textContainer}>
//           <Text style={styles.detailsHeader}>Name</Text>
//           <Text style={styles.detailsDesc}>{userData?.fullName || 'Guest'}</Text>
//         </View>
//       </View>

//       <View style={styles.detailsContainer}>
//         <Icon name="envelope" size={20} color="#000" style={styles.icon} />
//         <View style={styles.textContainer}>
//           <Text style={styles.detailsHeader}>Email Address</Text>
//           <Text style={styles.detailsDesc}>{userData?.email || 'Guest'}</Text>
//         </View>
//       </View>

//       <View style={styles.detailsContainer}>
//         <Icon name="phone" size={20} color="#000" style={styles.icon} />
//         <View style={styles.textContainer}>
//           <Text style={styles.detailsHeader}>Phone Number</Text>
//           <Text style={styles.detailsDesc}>{userData?.phoneNumber || '8032457859'}</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 30,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   detailsContainer: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   icon: {
//     marginRight: 20,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   detailsHeader: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   detailsDesc: {
//     fontSize: 18,
//     color: '#000',
//     fontWeight: '500',
//   },
// });

// export default MyProfile;
