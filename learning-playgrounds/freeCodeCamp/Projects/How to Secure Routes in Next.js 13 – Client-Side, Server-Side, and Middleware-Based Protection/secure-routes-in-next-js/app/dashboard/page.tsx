import isAuth from "@/components/isAuth";

const Dashboard = () => {
  return (
    <main className=" h-screen flex justify-center items-center">
      <p>Dashboard</p>
    </main>
  );
};

export default isAuth(Dashboard);
