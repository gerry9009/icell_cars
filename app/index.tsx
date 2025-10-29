import { Redirect } from "expo-router";

const Index = () => {
  return (
    <Redirect href="/auth/login" />
    // <Layout headerProps={{ title: "Index Screen" }}>
    //   <Text>Edit app/index.tsx to edit this screen.</Text>
    //   <Button label="Press me" onPress={() => alert("Button pressed!")} />
    //   <Button
    //     label="Press me"
    //     onPress={() => alert("Button pressed!")}
    //     type="link"
    //   />
    //   <Button label="Press me" onPress={() => alert("Button pressed!")} />
    // </Layout>
  );
};

export default Index;
