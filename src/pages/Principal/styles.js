<ScrollView>
            <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Livros')}
                style={styles.imageContainer} >

                <Image source={require('../../../assets/icon_uerj.png')} style={styles.imageAvatar} />
                <Text style={styles.texto}>Livros</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Quadrinhos')}
                style={styles.imageContainer}>

                <Image source={require('../../../assets/mafalda.png')} style={styles.imageAvatar} />
                <Text style={styles.texto}>Quadrinhos</Text>

            </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'fff', height: 100 }}>

                <View style={{ flexDirection: 'row' }}>
                   
                    <Button 
                    mode="contained" style={styles.loginButton}
                    onPress={() => navigation.navigate('CadastrarHistoria')}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>

                    <Button
                        mode="contained" style={styles.loginButton}
                        onPress={async () => {
                            await AsyncStorage.removeItem("token");
                            navigation.navigate('SignIn');
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                            LogOut
                        </Text>

                    </Button>

                </View>

            </View>
        </ScrollView>
        
        const styles = StyleSheet.create({
            imageContainer: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                paddingTop: 30,
                backgroundColor: '#FF9E9D'
            },
        
            imageAvatar: {
                flex: 1,
                height: 180,
                width: 180,
                resizeMode: 'stretch',
                padding: '40%',
        
            },
            texto: {
                flex: 1,
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold'
            },
            loginButton: {
                padding: 5,
                margin: 20,
                width: "50%",
                alignSelf: "center",
                backgroundColor: "#FF9E9D",
            },
        
        })