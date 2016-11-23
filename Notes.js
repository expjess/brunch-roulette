//NOTES FROM SKEVY


import Exponent from 'exponent';
import React from 'react';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';


const Router = createRouter(() => ({
  home: () => HomeScreen,
  restaurant: () => RestaurantScreen,
  // AA: () => AA, // Piccino
  // BB: () => BB, // Hillside
  // CC: () => CC, // Foreign Cinema
  // DD: () => DD, // Magic Flute
  // EE: () => EE, // Dottie's
  // FF: () => FF // Central Kitchen
}));

const restaurants = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF'];
const restaurants = [{
  name: 'AA',
  image: // some arbitrary uri
}]

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class HomeScreen extends React.Component {



  _handlePress() {
    this.props.navigator.push('restaurant', {
      restaurant: restaurants[Math.floor(Math.random() * restaurants.length)]
    });

    // this.props.restaurant
}

  render() {
    const imageUri = 'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/14026571_1593560867604785_887742897_n.jpg?ig_cache_key=MTMyNDc5MzQxNDAwNDU5OTM5NQ%3D%3D.2';


    return (
      <View style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            top: 0, left: 0,
            bottom: 0, right: 0,
          }}
          source={{ uri: imageUri }}
        />

        <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.4)'}]}>
        <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            fontSize: 20,
            marginBottom: 20,
          }}>
          Where shall we go for brunch?
        </Text>
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderStyle: 'solid',
          borderColor: 'grey',
          borderRadius: 10,
          borderWidth: 1,
          padding: 5,
        }}>

        <Button
          style={{
            color: 'rgb(36, 78, 20)',
            fontSize: 16,
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._handlePress()}>
          Find us a place.
        </Button>
        </View>
     </View>
     </View>
     </View>
    );
  }
}

class Restaurant extends React.Component {
  render() {
    return (
      <View>
        {this.props.restaurant.image}
      </View>
    )
  }
}

class AA extends React.Component {
  render() {
    const imageUri = 'https://static1.squarespace.com/static/51c38619e4b023fb4b79e299/5272d41ae4b08c2a8c9e9d2b/5272d41ee4b042bb920563a8/1397690595334/Piccino_ipad_02.jpg';


    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Piccino
      </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5
      }}>

      <Button
      style={{
        color: 'rgb(29, 22, 19)',
        fontSize: 16,
      }}
      onPress={() => this.props.navigator.push(restaurants[Math.floor(Math.random() * restaurants.length))}>
          Try another
      </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}

class BB extends React.Component {
  render() {
    const imageUri = 'https://www.giltcity.com/images/share/uploads/0000/0003/0131/301314281/orig.jpg';

    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
        <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Hillside S.C.
        </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5
      }}>
        <Button
        style = {{
          color: 'rgb(12, 26, 42)',
          fontSize: 16,
        }}
        onPress={() => this.props.navigator.push(restaurants[Math.floor(Math.random() * restaurants.length))}>
          Try another
          </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}

class CC extends React.Component {
  render() {
    const imageUri = 'http://www.santosurrutia.com/wp-content/uploads/2012/07/foreigncinema6-940x586.jpeg';

    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Foreign Cinema
      </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5
      }}>
        <Button
        style={{
          color: 'rgb(64, 38, 19)',
          fontSize: 16,
        }}
        onPress={() => this.props.navigator.push('home')}>
          Try another
        </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}

class DD extends React.Component {
  render() {
    const imageUri = 'http://urbandiningguide.com/wp-content/uploads/2014/06/magicflutesf.jpg';

    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Magic Flute
      </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5
      }}>
        <Button
        style={{
          color: 'rgb(119, 21, 21)',
          fontSize: 16,
        }}
        onPress={() => this.props.navigator.push('home')}>
          Try another
        </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}

class EE extends React.Component {
  render() {
    const imageUri = 'https://s-media-cache-ak0.pinimg.com/originals/13/80/6d/13806d12658efedcd1ccd9a09955f263.jpg';

    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Dotties
      </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5
      }}>
        <Button
        style={{
          color: 'rgb(109, 24, 19)',
          fontSize: 16,
        }}
        onPress={() => this.props.navigator.push('home')}>
          Try another
        </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}

class FF extends React.Component {
  render() {
    const imageUri = 'http://www.seriouseats.com/images/2012/11/20121118-central_kitchen_brunch-7.jpg';

    return (


      <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          top: 0, left: 0,
          bottom: 0, right: 0,
        }}
        source={{ uri: imageUri }}
      />
      <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
      <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 40,
          marginBottom: 10,
        }}>
        Central Kitchen
      </Text>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5
      }}>
        <Button
        style={{
          color: 'rgb(136, 50, 23)',
          fontSize: 16,
        }}
        onPress={() => this.props.navigator.push('home')}>
          Try another
        </Button>
      </View>
      </View>
      </View>
      </View>
    )
  }
}


Exponent.registerRootComponent(App);
