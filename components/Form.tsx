import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FormProps {
    onFormSubmit: (formData: FormData) => void;
    showUsername: boolean;
    showEmail: boolean;
    showPassword: boolean;
    showConfirmPassword: boolean;
}

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Form: React.FC<FormProps> = ({
    onFormSubmit,
    showUsername,
    showEmail,
    showPassword,
    showConfirmPassword,
}) => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<boolean>(false);

    const handleFormSubmit = () => {
        // Check which fields are required for submission
        if (showUsername && showEmail && showPassword && showConfirmPassword) {
            if (formData.username && formData.email && formData.password && formData.confirmPassword) {
                onFormSubmit(formData);
            } else {
                alert('All fields are required');
            }
        } else if (showUsername && showPassword) {
            if (formData.username && formData.password) {
                onFormSubmit(formData);
            } else {
                alert('Username and Password are required');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
    };

    return (
        <View style={styles.formContainer}>
            {showUsername && (
                <>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#898989"
                        placeholder="Enter username"
                        onChangeText={(text) => setFormData({ ...formData, username: text })}
                        value={formData.username}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                        required
                    />
                </>
            )}

            {showEmail && (
                <>
                    <Text style={styles.label}>Email Address:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#898989"
                        placeholder="Enter Email"
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                        value={formData.email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                        required
                    />
                </>
            )}

            {showPassword && (
                <>
                    <Text style={styles.label}>Password:</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholderTextColor="#898989"
                            placeholder="Enter Password"
                            secureTextEntry={!passwordVisibility}
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                            value={formData.password}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoCorrect={false}
                            required
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <MaterialCommunityIcons
                                name={passwordVisibility ? 'eye-off' : 'eye'}
                                size={20}
                                color="#fff"
                                marginRight={8}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}

            {showConfirmPassword && (
                <>
                    <Text style={styles.label}>Confirm Password:</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholderTextColor="#898989"
                            placeholder="Confirm Password"
                            secureTextEntry={!confirmPasswordVisibility}
                            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                            value={formData.confirmPassword}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoCorrect={false}
                            required
                        />
                        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                            <MaterialCommunityIcons
                                name={confirmPasswordVisibility ? 'eye-off' : 'eye'}
                                size={20}
                                color="#fff"
                                marginRight={8}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}

            <Button title="Submit" onPress={handleFormSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '90%',
        marginHorizontal: '5%',
    },
    label: {
        color: '#fff',
        marginBottom: 5,
    },
    input: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: '#fff',
        marginBottom: 15,
        width: '100%',
        height: 40,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
        height: 40,
    },
    passwordInput: {
        flex: 1,
        color: '#fff',
        padding: 10,
    },
});

export default Form;