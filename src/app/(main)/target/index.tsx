import GoalTotal from "@/components/GoalTotal";
import Header from "@/components/Header";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import Separator from "@/components/Separator";
import { colors } from "@/theme/default-colors";
import GoalItem from "@/components/GoalItem";

export default function Target() {

    const goals = [
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000001",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Juntar 100 reais por mês",
          "targetValue": 2000,
          "startDate": "2025-01-01T00:00:00",
          "endDate": "2025-12-31T00:00:00",
          "goalStatus": "InProgress",
          "created_at": "2025-06-16T14:21:00.914+00:00",
          "updated_at": "2025-06-16T14:21:00.914+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000002",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Economizar para viagem",
          "targetValue": 5000,
          "startDate": "2025-03-01T00:00:00",
          "endDate": "2025-11-30T00:00:00",
          "goalStatus": "InProgress",
          "created_at": "2025-06-17T10:00:00.000+00:00",
          "updated_at": "2025-06-17T10:00:00.000+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000003",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Reserva de emergência",
          "targetValue": 10000,
          "startDate": "2024-06-01T00:00:00",
          "endDate": "2025-06-01T00:00:00",
          "goalStatus": "Completed",
          "created_at": "2024-06-01T08:00:00.000+00:00",
          "updated_at": "2025-06-01T08:00:00.000+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000004",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Comprar notebook novo",
          "targetValue": 3500,
          "startDate": "2025-04-01T00:00:00",
          "endDate": "2025-09-01T00:00:00",
          "goalStatus": "InProgress",
          "created_at": "2025-06-10T09:30:00.000+00:00",
          "updated_at": "2025-06-10T09:30:00.000+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000005",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Curso de especialização",
          "targetValue": 1500,
          "startDate": "2025-02-01T00:00:00",
          "endDate": "2025-05-01T00:00:00",
          "goalStatus": "Expired",
          "created_at": "2025-01-01T12:00:00.000+00:00",
          "updated_at": "2025-05-02T12:00:00.000+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000006",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Fundo para emergências do pet",
          "targetValue": 800,
          "startDate": "2025-01-10T00:00:00",
          "endDate": "2025-12-10T00:00:00",
          "goalStatus": "InProgress",
          "created_at": "2025-01-10T10:10:10.000+00:00",
          "updated_at": "2025-06-01T10:10:10.000+00:00"
        },
        {
          "id": "1a1a1a1a-0000-0000-0000-000000000007",
          "userId": "123e4567-e89b-12d3-a456-426614174000",
          "subCategoryId": "9a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
          "goalName": "Trocar celular",
          "targetValue": 2500,
          "startDate": "2025-05-01T00:00:00",
          "endDate": "2025-10-01T00:00:00",
          "goalStatus": "InProgress",
          "created_at": "2025-05-01T08:00:00.000+00:00",
          "updated_at": "2025-06-16T14:21:00.914+00:00"
        }
      ]

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header title="Metas" />
                <GoalTotal />
                <View style={styles.actions}>
                    <CustomButton title="Criar Meta" variant="success" />
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
                            targetValue={item.targetValue}
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