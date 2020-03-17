import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View, ImageBackground, TouchableHighlight } from 'react-native';
import { AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob'

// ÷ Lembrar deste simbolo depois

// showRewarded = async () => {
// 	AdMobRewarded.setAdUnitID('ca-app-pub-4923735736173094/1050471027')
// 	await AdMobRewarded.requestAdAsync()
// 	await AdMobRewarded.showAdAsync()
// } Lembrar deste metodo de monetização (por recompensa)

const imgBtn = require('../../assets/imgs/Btn_Type_01.png')

export default class Sum extends Component {

	// componentDidMount(){

	// 	const showInterstitial = async () => {
	// 		try {
				
	// 			AdMobInterstitial.setAdUnitID('ca-app-pub-4923735736173094/8066664881')
	// 			await AdMobInterstitial.requestAdAsync()
	// 			await AdMobInterstitial.showAdAsync()
	
	// 			// AdMobInterstitial.requestAd().then(() => {
	// 			// 	AdMobInterstitial.showAd();
	// 			// })
	
	// 		} catch (e) {
	// 			console.log(e)
	// 		}
	// 	}

	// 	showInterstitial()

	// }

	constructor(props) {
		super(props)

		this.state = {
			randomNum1: null,
			randomNum2: null,
			resultado: null,
			alternativa1: null,
			alternativa1: null,
			alternativa1: null,
			botao: null
        }

        const display = () => {
            this.setState({
                randomNum1: Math.floor(Math.random() * 100),
                randomNum2: Math.floor(Math.random() * 100)
            })
        }

        const operation = () => {

            this.setState({botao: 1 + Math.floor(Math.random() * 3)})
    
            let num1 = this.state.randomNum1
            let num2 = this.state.randomNum2
            let result = num1 + num2
    
            this.setState({ resultado: result })
    
            if(this.state.botao == 1){
                this.setState({
                    alternativa1: result,
                    alternativa2: Math.floor(Math.random() * ((result - 10) - (result - 20))),
                    alternativa3: Math.floor(Math.random() * ((result - 20) - (result - 30)))
                })
            }else if(this.state.botao == 2) {
                this.setState({
                    alternativa1: Math.floor(Math.random() * ((result - 10) - (result - 20))),
                    alternativa2: result,
                    alternativa3: Math.floor(Math.random() * ((result - 20) - (result - 30)))
                })
            }else if(this.state.botao == 3) {
                this.setState({
                    alternativa1: Math.floor(Math.random() * ((result - 10) - (result - 20))),
                    alternativa2: Math.floor(Math.random() * ((result - 20) - (result - 30))),
                    alternativa3: result
                })
            }
    
        }
        
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.top}></View>

				<View style={styles.display}>
					<Text style={styles.displayText}>{this.state.randomNum1}</Text>
					<Text style={styles.displayText}> + </Text>
					<Text style={styles.displayText}>{this.state.randomNum2}</Text>
				</View>

				<View style={styles.btns}>

					<TouchableHighlight onPress={ () => {} } style={[styles.btnImgBtn, styles.d1]}>
						<ImageBackground source={imgBtn} style={styles.imgBtn}>
							<Text style={styles.imgBtnText}>{this.state.alternativa1}</Text>
						</ImageBackground>
					</TouchableHighlight>

					<TouchableHighlight onPress={ () => {} } style={[styles.btnImgBtn, styles.d2]}>
						<ImageBackground source={imgBtn} style={styles.imgBtn}>
							<Text style={styles.imgBtnText}>{this.state.alternativa2}</Text>
						</ImageBackground>
					</TouchableHighlight>

					<TouchableHighlight onPress={ () => {} } style={[styles.btnImgBtn, styles.d3]}>
						<ImageBackground source={imgBtn} style={styles.imgBtn}>
							<Text style={styles.imgBtnText}>{this.state.alternativa3}</Text>
						</ImageBackground>
					</TouchableHighlight>

				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	top: {
		backgroundColor: 'red',
		width: Dimensions.get('window').width,
		height: 60,
	},
	display: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').height / 2) - 150,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	displayText: {
		fontSize: 100,
		fontWeight: 'bold',
		color: '#29ABE2',
	},
	btns: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').height / 2),
		flexDirection: 'row',
	},
	btnImgBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
	imgBtn: {
		width: (Dimensions.get('window').width / 2.5),
		height: (Dimensions.get('window').width / 2.5),
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgBtnText: {
		color: '#FFF',
		fontSize: 45,
		fontWeight: '600',
		marginBottom: 25,
	},
	d1: {
		top: 20,
		left: 10,
	},
	d2: {
		bottom: 10,
		left: (Dimensions.get('window').width / 2) - (Dimensions.get('window').width / 5),
	},
	d3: {
		top: 20,
		right: 10,
	},
})
