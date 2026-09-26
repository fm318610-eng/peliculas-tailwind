import CardMoive from "./CardMoive"

const GridMovie = () => {
    return (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-3">
            <CardMoive></CardMoive>
        </div>
    );
};

export default GridMovie;