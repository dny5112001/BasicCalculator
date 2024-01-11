import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const colorScheme = useColorScheme();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');
  const [bckground, setBckground] = useState('');

  const handleNumberPress = (val: string) => {
    setNum1(num1 + val);
  };

  const handleOperationPress = (operator: string) => {
    if (operator === 'sqr') {
      setResult(parseFloat(num1) * parseFloat(num1));
      setNum1('');
      setNum2('');
      setOperator('');
    } else if (operator === '%') {
      setResult(parseFloat(num1) / 100);
      setNum1('');
      setNum2('');
      setOperator('');
    } else {
      setOperator(operator);
      setNum2(num1);
      setNum1('');
    }
  };

  const getResult = () => {
    switch (operator) {
      case '+':
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case '-':
        setResult(parseFloat(num2) - parseFloat(num1));
        break;

      case 'x':
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case '/':
        setResult(parseFloat(num2) / parseFloat(num1));
        break;
      case '%':
        setResult(parseFloat(num1) / 100);
        break;
      case 'sqr':
        setResult(parseFloat(num1) * parseFloat(num1));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result != null) {
      if (result.length < 5) {
        return <Text style={{color: '#FF9500'}}> = {result?.toString()}</Text>;
      } else {
        return (
          <Text style={{color: '#FF9500', fontSize: 60}}>
            {' '}
            = {result?.toString()}
          </Text>
        );
      }
    } else {
      if (num1.length > 4 && num1.length < 10) {
        return <Text style={{fontSize: 50}}>{num1}</Text>;
      }
      if (num1.length >= 10) {
        return <Text style={{fontSize: 30}}>{num1}</Text>;
      }
      if (num1 === '') {
        return '0';
      } else {
        return num1;
      }
    }
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult(null); // Corrected to set null instead of an empty string
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {colorScheme === 'light' ? (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            <View>
              <Text style={{fontSize: 50, color: '#000'}}>
                {num2}
                <Text style={{color: '#000', fontSize: 50}}>{operator}</Text>
                {num2 === '' || (!result && num2 !== '') ? null : (
                  <Text style={{color: '#000', fontSize: 50}}>{num1}</Text>
                )}
              </Text>
            </View>

            <Text style={{color: '#000', fontSize: 75}}>
              {firstNumberDisplay()}
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 20}}>
            <View
              style={{
                borderTopWidth: 0.2,
                marginBottom: 10,
                borderTopColor: '#FF9500',
              }}></View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={styles.operationpress} onPress={clear}>
                <Text style={styles.operationpressText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => setNum1(num1.slice(0, -1))}>
                <Text style={styles.operationpressText}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('sqr')}>
                <Text style={styles.operationpressText}>Sqr</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('/')}>
                <Text style={styles.operationpressText}>/</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('7')}>
                <Text style={styles.numberpressText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('8')}>
                <Text style={styles.numberpressText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('9')}>
                <Text style={styles.numberpressText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('x')}>
                <Text style={styles.operationpressText}>x</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('4')}>
                <Text style={styles.numberpressText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('5')}>
                <Text style={styles.numberpressText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('6')}>
                <Text style={styles.numberpressText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('-')}>
                <Text style={styles.operationpressText}>-</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('1')}>
                <Text style={styles.numberpressText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('2')}>
                <Text style={styles.numberpressText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('3')}>
                <Text style={styles.numberpressText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('+')}>
                <Text style={styles.operationpressText}>+</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('%')}>
                <Text style={styles.operationpressText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('0')}>
                <Text style={styles.numberpressText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('.')}>
                <Text style={styles.numberpressText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.result}
                onPress={() => getResult()}>
                <Text style={styles.operationpressText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            <View>
              <Text style={{fontSize: 50, color: '#fff'}}>
                {num2}
                <Text style={{color: '#fff', fontSize: 50}}>{operator}</Text>
                {num2 === '' || (!result && num2 !== '') ? null : (
                  <Text style={{color: '#fff', fontSize: 50}}>{num1}</Text>
                )}
              </Text>
            </View>

            <Text style={{color: '#fff', fontSize: 75}}>
              {firstNumberDisplay()}
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 20}}>
            <View
              style={{
                borderTopWidth: 0.2,
                marginBottom: 10,
                borderTopColor: '#FF9500',
              }}></View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={styles.operationpress} onPress={clear}>
                <Text style={styles.operationpressText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => setNum1(num1.slice(0, -1))}>
                <Text style={styles.operationpressText}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('sqr')}>
                <Text style={styles.operationpressText}>Sqr</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('/')}>
                <Text style={styles.operationpressText}>/</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('7')}>
                <Text style={styles.numberpressText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('8')}>
                <Text style={styles.numberpressText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('9')}>
                <Text style={styles.numberpressText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('x')}>
                <Text style={styles.operationpressText}>x</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('4')}>
                <Text style={styles.numberpressText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('5')}>
                <Text style={styles.numberpressText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('6')}>
                <Text style={styles.numberpressText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('-')}>
                <Text style={styles.operationpressText}>-</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('1')}>
                <Text style={styles.numberpressText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('2')}>
                <Text style={styles.numberpressText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('3')}>
                <Text style={styles.numberpressText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('+')}>
                <Text style={styles.operationpressText}>+</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.operationpress}
                onPress={() => handleOperationPress('%')}>
                <Text style={styles.operationpressText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('0')}>
                <Text style={styles.numberpressText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberpress}
                onPress={() => handleNumberPress('.')}>
                <Text style={styles.numberpressText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.result}
                onPress={() => getResult()}>
                <Text style={styles.operationpressText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  numberpress: {
    backgroundColor: '#ffffff',
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#FF9500',
  },
  numberpressText: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: '800',
  },
  operationpress: {
    backgroundColor: '#FF9500',
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#fff',
  },
  operationpressText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: '800',
  },
  result: {
    backgroundColor: '#505050',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
