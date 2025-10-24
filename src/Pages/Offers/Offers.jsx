import { Link } from "react-router";
import MyContainer from "../../MyContainer/MyContainer";

const Offers = () => {
  return (
    <MyContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-10 pt-10">
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🎉 Mega Toy Sale</h2>
            <p>
              Unwrap happiness with up to 50% off on your favorite toys! From
              action figures to learning sets — grab the deals before they’re
              gone.
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🧸 Buy 2 Get 1 Free</h2>
            <p>
              More toys, more smiles! Pick any two toys and get the third one
              absolutely free — because one gift is never enough..
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🚀 Limited-Time Flash Sale</h2>
            <p>
              Ready, set, shop! Enjoy massive discounts for the next 24 hours
              only. Hurry before time runs out!
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">
              🎁 Bundle Deals – More Fun, Less Price
            </h2>
            <p>
              Grab our exclusive toy bundles designed for endless joy. Save big
              on combo packs filled with playtime favorites!
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🌈 Weekend Wonder Deals</h2>
            <p>
              Make weekends magical with surprise discounts on top-rated toys.
              Offers change every Friday — keep checking back!
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🦄 Member Exclusive Offers .</h2>
            <p>
              Join our Club and unlock special member-only deals, early access
              to new arrivals, and extra discounts
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🎨 Creative Learning Kits – 25% Off</h2>
            <p>
              Inspire imagination and creativity with our learning toy sets. Fun
              + education = the perfect combo for curious kids.
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">❤️ Best Seller Deals</h2>
            <p>
              Our most-loved toys are now on sale! Shop customer favorites at
              unbeatable discounts — but only while stocks last.
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100  shadow-sm hover:shadow-lg
             hover:-translate-y-1 transition"
        >
          <div className="card-body   ">
            <h2 className="card-title">🚂 Holiday Magic Sale</h2>
            <p>
              Celebrate the season of joy! From Christmas cuddles to Eid
              surprises — find the perfect gifts at festive prices.
            </p>
            <div className="card-actions ">
              <Link
                to={"/toys"}
                className="btn hover:transform hover:scale-105
               btn-info"
              >
                Explore➡
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Offers;
