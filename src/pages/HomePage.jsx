import BottomNav from "../components/common/BottomNav";
import Navigation from "../components/common/Navigation";
import HeaderSection from "../components/core/home/HeaderSection";

const HomePage = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="w-full">
            <HeaderSection></HeaderSection>
      </div>
      <BottomNav></BottomNav>
    </>
  );
};

export default HomePage;
