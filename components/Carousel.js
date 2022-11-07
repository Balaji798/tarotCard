import { StyleSheet, Text, View,Dimensions,FlatList,Animated } from 'react-native'
import React,{useState,useEffect} from 'react'
import CarouselItem from './CarouselItem'

const {width,heigh} = Dimensions.get("window")

let flatList

function infiniteScroll(imageList) {
    const numberOdfData = imageList.length
    let ScrollView =0, scrolled =0

    setInterval(function(){
        scrolled ++
        if(scrolled<numberOdfData){
            ScrollView = ScrollView+width
        }else{
            ScrollView = 0
            scrolled=0
        }

        this.flatList.scrollToOffset({animated:true,offset:ScrollView})
    },3000)
}
const Carousel = ({data}) => {
   const scrollX = new Animated.Value(0)
   const position = Animated.divide(scrollX,width)
   const [imageList,setImageList]=useState(data)

   useEffect(()=>{
    setImageList(data)
    infiniteScroll(data)
   })
    if(data && data.length){
        return (
            <View>
              <FlatList data={data}
              ref = {(flatList)=>{this.flatList=flatList}}
              keyExtractor={(item,index)=>"key"+index}
              horizontal
              pagingEnabled
              scrollEnabled
              snapToAlignment='center'
              scrollEventThrottle={16}
              decelerationRate = {"fast"}
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=>{
                return <CarouselItem item = {item}/>
              }}
              onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}]
              )}
              />
              <View style={styles.dotView}>
                {data.map((_,i)=>{
                  let opacity = position.interpolate({
                    inputRange:[i-1,i,i+1],
                    outputRange:[0.3,1,0.3],
                    extrapolate:"clamp"
                  })
                  return(
                    <Animated.View
                    key={i}
                    style = {{opacity,height:10,width:10,backgroundColor:"#fff",margin:8,borderRadius:5}}
                    />
                  )
                })}
              </View>
            </View>
          )
    }
}

export default Carousel

const styles = StyleSheet.create({
    dotView:{
      flexDirection:"row",
      justifyContent:"center",
      position:"absolute",
      left:"35%",
      top:"85%"
    }
})