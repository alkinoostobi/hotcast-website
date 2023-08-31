"use client";
import React, { useState, useEffect } from "react";
import faqData from "@/public/json/faq.json";

type FaqItemProps = {
  question: string;
  answer: string;
};

type Item = {
  category: string;
  icon: string;
  questions: {
    question: string;
    answer: string;
  }[];
};

const Faq: React.FC<FaqItemProps> = () => {
  const [data, setData] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setData(faqData);
  }, []);

  const filteredData = data.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchedQuestions = item.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(lowerCaseQuery) ||
        q.answer.toLowerCase().includes(lowerCaseQuery)
    );
    return (
      !selectedCategory ||
      selectedCategory === item.category ||
      matchedQuestions.length > 0
    );
  });

  const toggleCategory = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const [openQuestions, setOpenQuestions] = useState<{
    [key: string]: number | null;
  }>({});

  const handleQuestionToggle = (category: string, questionIndex: number) => {
    setOpenQuestions((prevOpenQuestions) => {
      return {
        ...prevOpenQuestions,
        [category]:
          prevOpenQuestions[category] === questionIndex ? null : questionIndex,
      };
    });
  };

  return (
    <div className="min-h-screen py-40 mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1 bg-gray-800 shadow rounded-lg p-4 space-y-4 h-fit top-0 sticky ">
            <div className="text-4xl font-thin mb-4">Categories</div>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-500 rounded px-6 py-4 text-xl text-orange-500 font-light focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="space-y-4">
              {data.map((item) => (
                <div
                  key={item.category}
                  className={`p-4 rounded-md font-light cursor-pointer text-xl ${
                    selectedCategory === item.category
                      ? "bg-orange-500 text-white"
                      : "bg-white-100 text-gray-500"
                  }`}
                  onClick={() => toggleCategory(item.category)}
                >
                  {item.category}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="md:col-span-3 bg-gray-800 shadow rounded-lg p-6">
            <h1 className="text-5xl font-thin mb-6 text-white">
              Frequently Asked Questions
            </h1>
            {filteredData.length === 0 && (
              <div>No matching categories found.</div>
            )}
            {filteredData.map(
              (item) =>
                (!selectedCategory || selectedCategory === item.category) &&
                item.questions.some((q) =>
                  q.question.toLowerCase().includes(searchQuery.toLowerCase())
                ) && (
                  <div key={item.category} className="mb-8">
                    <h2 className="text-3xl font-light mb-6 text-gray-100 flex items-center">
                      <img
                        src={item.icon}
                        alt={item.category}
                        className="w-8 h-8 mr-4 bg-gray-200 p-2 rounded-full"
                      />
                      {item.category}
                    </h2>
                    {item.questions
                      .filter((q) =>
                        q.question
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((q, index) => (
                        <div key={index} className="mb-6">
                          <div
                            className="text-xl font-regular cursor-pointer hover:text-orange-500 text-gray-200"
                            onClick={() =>
                              handleQuestionToggle(item.category, index)
                            }
                          >
                            {q.question}
                          </div>
                          {openQuestions[item.category] === index && (
                            <div className="text-gray-400 text-lg mt-4">
                              {q.answer}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
