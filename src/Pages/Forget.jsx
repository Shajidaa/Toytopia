const Forget = () => {
  return (
    <div className="flex justify-center items-center  py-2  min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <button className="btn btn-neutral mt-4">Reset</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
