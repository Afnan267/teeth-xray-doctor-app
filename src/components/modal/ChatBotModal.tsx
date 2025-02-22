import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  AIChatIcon,
  AttachFileIcon,
  SendIcon,
  SettingsIcon,
} from '../../Assets/Svg';

interface Message {
  id: string;
  text: string;
  sender: string;
}

interface ChatBotModalProps {
  visible: boolean;
  onClose: () => void;
}

const ChatBotModal: React.FC<ChatBotModalProps> = ({visible, onClose}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = {id: Date.now().toString(), text: input, sender: 'user'};
    setMessages([...messages, newMessage]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: 'Hello! How can I help you?',
          sender: 'bot',
        },
      ]);
    }, 1000);
  };
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.chatBox, {paddingBottom: 10}]}>
              <View style={styles.chatSettingsContainer}>
                <AIChatIcon />
                <Text style={styles.chatTitle}>AI chatbot</Text>
                <SettingsIcon />
              </View>

              <FlatList
                style={styles.chatListContainer}
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View
                    style={[
                      styles.message,
                      item.sender === 'user'
                        ? styles.userMessage
                        : styles.botMessage,
                    ]}>
                    <Text style={styles.text}>{item.text}</Text>
                  </View>
                )}
              />

              <View style={styles.inputContainer}>
                <AttachFileIcon />
                <TextInput
                  style={styles.input}
                  value={input}
                  onChangeText={setInput}
                  placeholder="Ask anything"
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                  <SendIcon />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  chatListContainer: {
    paddingVertical: 11,
  },

  chatTitle: {
    color: '#787878',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-ExtraBold',
    textAlign: 'left',
    flex: 1,
    marginStart: 13,
    alignSelf: 'center',
  },
  chatSettingsContainer: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 17,
    paddingStart: 15,
    paddingEnd: 25,
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end', // Move modal to bottom
  },
  chatBox: {
    width: '100%', // Full width
    height: '70%', // 70% of screen height
    backgroundColor: '#F9F9FF',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    padding: 12,
  },
  message: {
    padding: 8,
    borderRadius: 5,
    marginVertical: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D1E7F7',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#787878',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingStart: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 32,
    height: 60,
  },
  input: {
    flex: 1,
    // padding: 8,
    paddingStart: 20,
  },
  sendButton: {
    height: 52,
    width: 52,
    backgroundColor: '#4A7FEB',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: 'white',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  closeText: {
    color: 'red',
    fontSize: 16,
  },
});

export default ChatBotModal;
