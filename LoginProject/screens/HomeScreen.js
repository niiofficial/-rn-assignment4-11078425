import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ route }) => {
  const { name = 'Guest', email = 'Not provided' } = route.params || {};

  const featuredJobs = [
    { id: '1', company: 'Google', logo: 'https://example.com/google-logo.png', title: 'Software Engineer', salary: '$120,000', location: 'Accra, Ghana', backgroundColor: '#4285F4' },
    { id: '2', company: 'Facebook', logo: 'https://example.com/facebook-logo.png', title: 'Product Manager', salary: '$130,000', location: 'Kasoa, Ghana', backgroundColor: '#4267B2' },
    { id: '3', company: 'Amazon', logo: 'https://example.com/amazon-logo.png', title: 'Data Scientist', salary: '$115,000', location: 'Makola, Ghana', backgroundColor: '#FF9900' },
    { id: '4', company: 'Apple', logo: 'https://example.com/apple-logo.png', title: 'UX Designer', salary: '$110,000', location: 'Abokobi, Ghana', backgroundColor: '#A2AAAD' },
    { id: '5', company: 'Microsoft', logo: 'https://example.com/microsoft-logo.png', title: 'Cloud Engineer', salary: '$125,000', location: 'Wale Wale, WA', backgroundColor: '#737373' },
    { id: '6', company: 'Netflix', logo: 'https://example.com/netflix-logo.png', title: 'DevOps Engineer', salary: '$128,000', location: 'Bukom, James Town', backgroundColor: '#E50914' },
    { id: '7', company: 'Tesla', logo: 'https://example.com/tesla-logo.png', title: 'Mechanical Engineer', salary: '$118,000', location: 'Abetifi, Ga', backgroundColor: '#69fc0' },
    { id: '8', company: 'Adobe', logo: 'https://example.com/adobe-logo.png', title: 'Graphic Designer', salary: '$100,000', location: 'Abeka, Lapaz', backgroundColor: '#FF0000' },
  ];

  const popularJobs = [
    { id: '1', company: 'Google', logo: 'https://example.com/google-logo.png', title: 'Software Engineer', salary: '$120,000', location: 'Accra, Ghana', backgroundColor: '#4285F4' },
    { id: '2', company: 'Facebook', logo: 'https://example.com/facebook-logo.png', title: 'Product Manager', salary: '$130,000', location: 'Kasoa, Ghana', backgroundColor: '#4267B2' },
    { id: '3', company: 'Amazon', logo: 'https://example.com/amazon-logo.png', title: 'Data Scientist', salary: '$115,000', location: 'Makola, Ghana', backgroundColor: '#FF9900' },
    { id: '4', company: 'Apple', logo: 'https://example.com/apple-logo.png', title: 'UX Designer', salary: '$110,000', location: 'Abokobi, Ghana', backgroundColor: '#A2AAAD' },
    { id: '5', company: 'Microsoft', logo: 'https://example.com/microsoft-logo.png', title: 'Cloud Engineer', salary: '$125,000', location: 'Wale Wale, WA', backgroundColor: '#737373' },
    { id: '6', company: 'Netflix', logo: 'https://example.com/netflix-logo.png', title: 'DevOps Engineer', salary: '$128,000', location: 'Bukom, James Town', backgroundColor: '#E50914' },
    { id: '7', company: 'Tesla', logo: 'https://example.com/tesla-logo.png', title: 'Mechanical Engineer', salary: '$118,000', location: 'Abetifi, Ga', backgroundColor: '#69fc0' },
    { id: '8', company: 'Adobe', logo: 'https://example.com/adobe-logo.png', title: 'Graphic Designer', salary: '$100,000', location: 'Abeka, Lapaz', backgroundColor: '#FF0000' },
  ];

  const renderJobCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Image source={{ uri: item.logo }} style={styles.cardLogo} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCompany}>{item.company}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardSalary}>{item.salary}</Text>
        <Text style={styles.cardLocation}>{item.location}</Text>
      </View>
    </View>
  );

  const renderPopularJobItem = ({ item }) => (
    <View style={styles.verticalItemContainer}>
      <Text style={styles.verticalItemTitle}>{item.title}</Text>
      <Text style={styles.verticalItemTime}>{item.time}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome, {EricAtsu}!</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Image
          source={require('../imgs/profile.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search a job or position"
            />
          </View>
          <TouchableOpacity style={styles.configBox}>
            <Icon name="settings-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.featuredHeadingContainer}>
          <Text style={styles.featuredHeading}>Featured Jobs</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <FlatList
          data={featuredJobs}
          renderItem={renderJobCard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredJobsList}
        />
        <View style={styles.featuredHeadingContainer}>
          <Text style={styles.featuredHeading}>Popular Jobs</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <FlatList
          data={popularJobs}
          renderItem={renderPopularJobItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.verticalDataList}
        />
      </View>
    </ScrollView>
  );
};

HomeScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
  },
  profileImage: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
    paddingHorizontal: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  configBox: {
    marginLeft: 10,
    padding: 10,
  },
  featuredHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  featuredHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    color: 'gray',
    left: 190,
  },
  featuredJobsList: {
    marginTop: 10,
    marginBottom: 20,
  },
  verticalDataList: {
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    width: 280,
    height: 186,
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
  },
  cardLogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
  },
  cardCompany: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 70,
  },
  cardSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cardLocation: {
    fontSize: 16,
    color: 'white',
  },
  verticalItemContainer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  verticalItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verticalItemTime: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default HomeScreen;
