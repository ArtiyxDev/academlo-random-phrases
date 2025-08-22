export default function JsonDataMapper<Type>(jsonData: string): Type[] {
    return JSON.parse(jsonData).map((item:Type) => ({
        ...item,
    }));
}
