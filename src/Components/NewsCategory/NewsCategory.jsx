
const NewsCategory = ({category}) => {
    const {name}= category;
    return (
        <div className="text-gray-500 pl-6 mb-4">
            <p>{name}</p>
        </div>
    );
};

export default NewsCategory;