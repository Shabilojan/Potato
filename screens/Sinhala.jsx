import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View
} from 'react-native';

const Sinhala = () => {
  return (
    <View style={styles.container}>
    <Image style={{ position: 'absolute', width: '100%', height: '100%' }} blurRadius={5} source={require('../assets/BG-08.jpg')} />
    <SafeAreaView>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.heading}>
        ශාක රෝග වලින් ස්වභාවිකව ආරක්ෂා කරන්නේ කෙසේද?
        </Text>

        <Image style={{ width: 150, height: 150, marginLeft:20,marginTop:10}} source={require('../assets/Pic.png')} />

        <View style={styles.pointContainer}>

<Text style={styles.Subheading}>
මුල් අංගමාරය
මෙම රෝගය ඇතිවන්නේ Alternaria solani නම් දිලීරය මගිනි. එය සාමාන්‍යයෙන්
අර්තාපල් ශාකයේ පහළ පත්‍රවල කේන්ද්‍රීය මුදු සහිත තද දුඹුරු හෝ කළු පැහැති ලප ලෙස දිස්වේ.
මුල් අංගමාරය පාලනය නොකළ හොත් සැලකිය යුතු පල්වීමක් ඇති විය හැක.

සුව කිරීමේ ක්රම 
</Text>

  <Text style={styles.pointTitle}>1. බෝග භ්‍රමණය:</Text>
  <Text style={styles.pointDescription}>
    භෝග භ්‍රමණය යනු එක් එක් කන්නයේ යම් ප්‍රදේශයක වගා කරන බෝග වර්ගය වෙනස් කිරීමයි.
    මෙම පිළිවෙත පස මගින් බෝවන රෝග සහ පළිබෝධකයන්ගේ ජීවන චක්‍රවලට බාධා කරයි.
    භෝග භ්‍රමණය කිරීමෙන්, විශේෂයෙන් අර්තාපල් (Solanaceae) වැනි එකම පවුලේ ඒවා වළක්වා ගැනීමෙන්,
    ඔබ පසෙහි මුල් අංගමාර බීජාණු ගොඩනැගීම අඩු කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>2. ප්‍රතිරෝධී ප්‍රභේද:</Text>
  <Text style={styles.pointDescription}>
    මුල් අංගමාරයට ප්‍රතිරෝධී වන පරිදි බෝ කරන ලද අල වර්ග සිටුවීමෙන් ආසාදනය වීමේ සම්භාවිතාව අඩු වේ.
    මෙම ප්‍රභේදවලට ප්‍රවේණික ලක්ෂණ ඇති අතර ඒවා අංගමාරය රෝග කාරකයට අඩු ආකර්ෂණයක් ඇති කරයි,
    නැතහොත් ආසාදනයට වඩා හොඳින් ප්‍රතිරෝධී වේ.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>3. නිසි පරතරය:</Text>
  <Text style={styles.pointDescription}>
    ශාක අතර නිසි පරතරයක් තැබීමෙන් වාතය නිදහසේ සංසරණය වීමට ඉඩ සලසයි,
    පත්‍ර වටා ඇති ආර්ද්‍රතාවය අඩු කරයි. අධික ආර්ද්‍රතාවය සහ දුර්වල වායු සංසරණය මුල් අංගමාරය
    දිලීර වර්ධනය වීමට සහ පැතිරීමට සුදුසු පරිසරයක් නිර්මාණය කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>4. වසුන් යෙදීම:</Text>
  <Text style={styles.pointDescription}>
    වසුන් යෙදීම යනු පිදුරු, තෘණ කැබලි හෝ කොම්පෝස්ට් වැනි කාබනික ද්‍රව්‍යවලින් ඔබේ
    පැල වටා පස ආවරණය කිරීමයි. මෙම බාධකය මගින් අංගමාර බීජාණු වැළැක්විය හැකි පස,
    ජලය දැමීමේදී හෝ වර්ෂාපතනයේ දී කොළ මතට ඉසීමෙන් වළක්වන අතර එමඟින් දිලීර පැතිරීම අඩු කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>5. නීම් තෙල්:</Text>
  <Text style={styles.pointDescription}>
    නයිම් ගසේ බීජ වලින් නෙම් තෙල් නිස්සාරණය කරයි. මුල් අංගමාරය වැනි දිලීර රෝග වැළැක්වීමට
    සහ පාලනය කිරීමට උපකාරී වන දිලීර නාශක ගුණ එහි ඇත. නිතිපතා යෙදීම මගින් දිලීර වර්ධනයට
    බාධා කරන ශාක මත ආරක්ෂිත තට්ටුවක් නිර්මාණය කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>6. කොම්පෝස්ට් තේ:</Text>
  <Text style={styles.pointDescription}>
    කොම්පෝස්ට් තේ යනු කොම්පෝස්ට් ජලයේ ගිල්වා සාදන දියර ද්‍රාවණයකි.
    එය ප්‍රයෝජනවත් ක්ෂුද්‍ර ජීවීන්ගෙන් පොහොසත් වන අතර එය මුල් අංගමාරය රෝග කාරකය වැනි හානිකර
    දිලීර අභිබවා යා හැකිය. ශාකවලට කොම්පෝස්ට් තේ යෙදීමෙන් ඔවුන්ගේ ප්‍රතිශක්තිකරණ පද්ධතිය ඉහළ 
    නංවා රෝගවලට ඔරොත්තු දීමේ හැකියාව වර්ධනය කර ගත හැක.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>7. බේකින් සෝඩා විසඳුම:</Text>
  <Text style={styles.pointDescription}>
    බේකින් සෝඩා (සෝඩියම් බයිකාබනේට්) පත්‍ර මතුපිට ක්ෂාරීය පරිසරයක් නිර්මාණය කරන අතර
    එය දිලීර වර්ධනයට අහිතකර වේ. බේකින් සෝඩා එළවළු තෙල් සහ ජලය සමඟ මිශ්‍ර කර ශාක මත 
    ඉසීම දිලීර ස්ථාපිත වීම වළක්වා ගැනීමට උපකාරී වේ.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>8. ආසාදිත පත්‍ර ඉවත් කරන්න:</Text>
  <Text style={styles.pointDescription}>
    මුල් අංගමාරයේ රෝග ලක්ෂණ පෙන්නුම් කරන කොළ ඉවත් කිරීම (සංකේන්ද්‍රීය වළලු සහිත අඳුරු ලප)
    රෝගය පැතිරීම සීමා කළ හැකිය. ආසාදිත පත්‍ර සෞඛ්‍ය සම්පන්න පත්‍ර දක්වා පැතිර යා හැකි බීජාණු 
    ප්‍රභවයකි, එබැවින් කාලෝචිත ලෙස ඉවත් කිරීම ඉතා වැදගත් වේ.
  </Text>
</View>

<Text style={styles.Subheading}>
ප්‍රමාද අංගමාරය 
oomycete Phytophthora infestans විසින් ඇති කරන ලද, ප්‍රමාද අංගමාරය වඩාත් දරුණු වන අතර 1840 
ගණන්වල අයර්ලන්ත අර්තාපල් සාගතය ඇති කිරීම සඳහා කුප්‍රකට විය. එය කොළ මත ජලයෙන් පොඟවා 
ඇති තුවාල ලෙස දිස්වන අතර එය අල ඇතුළු ශාකයේ අනෙකුත් කොටස් වලට වේගයෙන් පැතිර යා හැකිය. 
ප්‍රමාද අංගමාරය සිසිල්, තෙත් තත්වයන් යටතේ වර්ධනය වේ. 

සුව කිරීමේ ක්රම 

</Text>


<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>1. තඹ දිලීර නාශක:</Text>
  <Text style={styles.pointDescription}>
    තඹ දිලීර නාශක ප්‍රමාද අංගමාරය පාලනයට ඵලදායී වේ. 
    ඔවුන් දිලීරයේ සෛලීය ක්‍රියාවලීන්ට මැදිහත් වීමෙන් ක්‍රියා කරයි. 
    සම්පූර්‍ණයෙන්ම ස්වභාවික නොවූවත්, තඹ දිලීර නාශක කාබනික ගොවිතැනේදී 
    යම් යම් තත්වයන් යටතේ අවසර දී ඇති අතර ප්‍රමාද අංගමාරය පාලනය කිරීම සඳහා
    ශක්‍ය විකල්පයක් ලෙස සැලකේ.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>2. සුදුළූණු ඉසින:</Text>
  <Text style={styles.pointDescription}>
    සුදුළූණු වල දිලීර නාශක ගුණ ඇති සල්ෆර් සංයෝග අඩංගු වේ.
    සුදුළූණු ඉසින සෑදීමට සුදුළූණු කරාබුනැටි තලා, වතුරේ ගිල්වා, පසුව විසඳුම ශාක මත ඉසීම ඇතුළත් වේ. 
    මෙය දිලීර ආසාදන වැලැක්වීමට උපකාරී වන ආරක්ෂිත තට්ටුවක් නිර්මාණය කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>3. කිරි ඉසින:</Text>
  <Text style={styles.pointDescription}>
    කිරි, විශේෂයෙන්ම අමු කිරි, දිලීර වර්ධනයට බාධා කළ හැකි 
    ප්‍රයෝජනවත් බැක්ටීරියා සහ lactoferrin වැනි සංයෝග අඩංගු වේ. 
    කිරි ජලය සමග තනුක කර ශාක පත්‍ර මත ඉසීමෙන් දිලීරයට අහිතකර පරිසරයක් 
    නිර්මාණය කිරීමෙන් ප්‍රමාද අංගමාරය පාලනය කළ හැකිය.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>4. හයිඩ්‍රජන් පෙරොක්සයිඩ් ද්‍රාවණය:</Text>
  <Text style={styles.pointDescription}>
    හයිඩ්‍රජන් පෙරොක්සයිඩ් යනු ස්පර්ශයේදී දිලීර බීජාණු විනාශ කළ හැකි විෂබීජ නාශකයකි.
    එය ජලය සමග තනුක කර ශාක මත ඉසීමෙන් බීජාණු ආසාදනය වීමට පෙර ඒවා විනාශ
     කිරීමෙන් ප්‍රමාද අංගමාරය පැතිරීම පාලනය කළ හැකිය.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>5. ජලය දැමීමේ පිළිවෙත්:</Text>
  <Text style={styles.pointDescription}>
    තෙත් පත්‍ර මගින් දිලීර බීජාණු ප්‍රරෝහණය වීමට සහ ශාක ආසාදනය කිරීමට සුදුසු
    පරිසරයක් නිර්මාණය කරයි. පැල වලට ඉහලින් නොව පාමුල වතුර දැමීම කොළ වියළී යයි.
    උදෑසන ජලය දැමීම මගින් කොළ මත ඇති ඕනෑම ජලය දිවා කාලයේදී ඉක්මනින් වාෂ්ප විය හැක.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>6. සුන්බුන් පිරිසිදු කරන්න:</Text>
  <Text style={styles.pointDescription}>
    ප්‍රමාද අංගමාර බීජාණු ශීත ඍතුවේ දී ශාක සුන්බුන් සහ පසෙහි පැවතිය හැකිය.
    වර්ධනය වන සමය අවසානයේ සියලුම ශාක සුන්බුන් ඉවත් කිරීම සහ විනාශ කිරීම
    මගින් ඊළඟ වසරේ නව ශාක ආසාදනය කිරීමට රෝග කාරකය පැවැත්මේ සම්භාවිතාව අඩු කරයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>1. හොඳ සනීපාරක්ෂාව:</Text>
  <Text style={styles.pointDescription}>
    රෝගවලින් තොර බීජ අල වලින් ආරම්භ කිරීම සහ ගෙවතු වගා මෙවලම් පිරිසිදුව
    තබා ගැනීම අංගමාර රෝග කාරක හඳුන්වාදීම සහ පැතිරීම වළක්වයි. රෝගවලින්
    තොර බීජ අංගමාරය බීජාණු වලින් තොර බවට සහතික කර ඇති අතර සනීපාරක්ෂක
    මෙවලම් ශාක අතර හරස් දූෂණය වීම වළක්වයි.
  </Text>
</View>

<View style={styles.pointContainer}>
  <Text style={styles.pointTitle}>2. කාලගුණය නිරීක්ෂණය කරන්න:</Text>
  <Text style={styles.pointDescription}>
    අංගමාර රෝග විශේෂිත පාරිසරික තත්ත්වයන් තුළ, විශේෂයෙන් තෙත් සහ තෙතමනය
    සහිත කාලගුණය තුළ වර්ධනය වේ. කාලගුණ අනාවැකි නිරීක්ෂණය කිරීම සහ එවැනි කාල
    පරිච්ෙඡ්දය තුළ වැළැක්වීමේ ප්‍රතිකාර සමඟ ක්‍රියාශීලී වීම රෝගය ඵලදායී ලෙස කළමනාකරණය
    කිරීමට උපකාරී වේ. ඉහළ අවදානම් කාලපරිච්ඡේදයකට පෙර හෝ අතරතුර දිලීර නාශක හෝ
    වෙනත් ප්‍රතිකාර යෙදීම මෙයට ඇතුළත් විය හැකිය.
  </Text>
</View>

      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  
  

  },
  scrollView: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    marginHorizontal: 10,
    width: 350,
    alignSelf: 'center',
    height: 700,
    marginVertical: 100,
    borderRadius: 10,
  },
  
  heading:{
    marginTop:10,
    fontSize: 20,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    color: 'black',

  },

  Subheading:{
    marginTop:10,
    fontSize: 15,
    padding:10,
    textAlign:'auto',
    fontWeight:'bold',
    marginBottom:10,
    color: 'black',

  },

  text: {
    fontSize: 20,
    padding:25,
    color: 'black',
  },

  pointTitle:{
    fontSize: 15,
    padding:10,
    textAlign:'auto',
    fontWeight:'bold',
    marginBottom:10,
    color: 'black',

  },
  pointDescription:{
    fontSize: 13,
    padding:2,
    textAlign:'auto',
    fontWeight:'bold',
    marginBottom:10,
    marginHorizontal:20,
    color: 'black',

  }
});


export default Sinhala;