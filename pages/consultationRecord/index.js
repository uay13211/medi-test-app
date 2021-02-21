import React, { useMemo, useState } from 'react'
import useRecords from './hooks'
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import constants from '../../constants'
import RecordItem from './recordItem'
import FloatingBtn from '../../components/floatingBtn'
import useTabs from '../../hooks/useTabs'
import Tabs from './tabs'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.white,
      alignItems: 'center',
      padding: 30
    },
    title: {
      fontSize: constants.titleFontSize,
      textAlign: 'center',
      marginTop: 20,
    },
    tabs: {
      marginBottom: 20
    },
    button: {
      marginTop: 24,
    },
});

const timeIntervals = [
  {
    title: 'Daily',
    value: '1d',
  },
  {
    title: 'Weekly',
    value: '1w',
  },
  {
    title: 'Monthly',
    value: '1m',
  },
  {
    title: 'Yearly',
    value: '1y',
  }
]

const renderItem = ({
  item
}) => {
  return (
    <RecordItem item={item} />
  )
}

const ConsultationRecordsPage = () => {
    const [selectedTimeInterval, setSelectedTimeInterval] = useState(0)
    const { isReady, records } = useRecords(timeIntervals[selectedTimeInterval].value)

    const tabItems = useMemo(() => {
      return timeIntervals.map((timeInterval, idx) => ({
        ...timeInterval,
        isActive: idx === selectedTimeInterval,
        onPress: () => setSelectedTimeInterval(idx)
      }))
    }, [selectedTimeInterval])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Consultation Records</Text>
            <Tabs style={styles.tabs} items={tabItems}/>
            {isReady && 
              <FlatList 
                data={records}
                renderItem={renderItem}
                keyExtractor={item => `${item.cId}`}
              />
            }
            <FloatingBtn />
        </SafeAreaView>
    )
}

export default ConsultationRecordsPage
