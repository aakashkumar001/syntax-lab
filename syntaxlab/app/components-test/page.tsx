import ProblemTag from "@/components/companytTag";
import SolvedProblems from "@/components/solvedProblems";
import PageHeader from "@/components/pageHeader";
import Question from "@/components/question";
import SandPack from "@/components/sandpack";

const page = () => {
  const files = {};
  return (
    <>
      <SolvedProblems />
      <ProblemTag />
      <PageHeader />
      <Question />

      <SandPack />
    </>
  );
};

export default page;
