import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName : 'Chirayu', lastName : 'Maru',
    email : 'chirayumaru@gamil.com'
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />

    </section>
  )
}

export default Home