import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 20
  },
  
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31cf67'
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop:36,
    marginBottom:42
  },

  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: "center"
  }
});