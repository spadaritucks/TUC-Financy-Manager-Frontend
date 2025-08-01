import GoalTotal from "@/components/GoalTotal";
import Header from "@/components/Header";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import Separator from "@/components/Separator";
import { colors } from "@/theme/default-colors";
import GoalItem from "@/components/GoalItem";
import Dialog from "@/components/Dialog";
import { StackRoutesList } from "@/routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { GoalService } from "@/services/GoalService";
import { useAuth } from "@/context/auth";
import { useCallback, useState } from "react";
import { GoalResponseDTO } from "@/types/DTOs/Goals/GoalResponseDTO";



export default function Goal() {

  const stackNavigation = useNavigation<NativeStackNavigationProp<StackRoutesList>>();
  const {authData} = useAuth()
  const [goals, setGoals] = useState<GoalResponseDTO[]>()

  async function getUserGoals () {
    try{
      const id = authData && authData.user.id
      const response = await GoalService.getGoalsByUserId(id, 0, 10)
      setGoals(response)

    }catch(error : any) {
      console.error(error.response.data.message)
    }
  }

    useFocusEffect(
      useCallback(()=>{
        getUserGoals()
      },[])
    )

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header title="Metas" />
                <GoalTotal goals={goals} />
                <View style={styles.actions}>
                    <CustomButton title="Criar Meta" variant="success" onPress={() => stackNavigation.navigate("create_goal")} />
                </View>
                
                <View style={styles.contentList}>

                    <View style={styles.title}>
                        <Text style={styles.titleList}>Lista de Metas</Text>
                        <Separator color={colors.gray[400]} width={"90%"} height={2} />
                    </View>
                    <FlatList
                        data={goals}
                        renderItem={({ item }) => (<GoalItem
                            goalName={item.goalName}
                            targetValue={parseInt(item.targetValue)}
                            goalStatus={item.goalStatus}
                            endDate={item.endDate} />)}
                        keyExtractor={transaction => transaction.id}
                        contentContainerStyle={styles.list}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}