// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		

		//friday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "The Black Keys", "Main Stage", 20150612, 2100, 2200, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "The Prodigy", "Main Stage", 20150612, 2200, 2300, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "You Me At Six", "Main Stage", 20150612, 2000, 2100, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Counting Crows", "Main Stage", 20150612, 1900, 2000, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "Kodaline", "Main Stage", 20150612, 1800, 1900, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "The Struts", "Main Stage", 20150612, 1700, 1800, 0, 0, "Friday", "video_link_HERE")');
	
		//Saturday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "James", "Main Stage", 20150613, 2000, 2100, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "Pharrell Williams", "Main Stage", 20150613, 2100, 2200, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Blur", "Main Stage", 20150613, 2200, 2300, 0, 0, "Saturday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "James Bay", "Main Stage", 20150613, 1700, 1800, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Kool And The Gang", "Main Stage", 20150613, 1900, 2000, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "Jessie Ware", "Main Stage", 20150613, 1800, 1900, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "Jess Glynne", "Main Stage", 20150613, 1600, 1700, 0, 0, "Saturday", "video_link_HERE")');
		
		//Sunday Main Stage
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "Imelda May", "Main Stage", 20150614, 1800, 1900, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "The Courteeners", "Main Stage", 20150614, 1900, 2000, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "First Aid Kit", "Main Stage", 20150614, 2000, 2100, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "Paolo Nutini", "Main Stage", 20150614, 2100, 2200, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "Fleetwood Mac", "Main Stage", 20150614, 2200, 2300, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "Suzanne Vega", "Main Stage", 20150614, 1600, 1700, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Jethro Tulls Ian Anderson", "Main Stage", 20150614, 1700, 1800, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "The Rainband", "Main Stage", 20150614, 1500, 1600, 0, 0, "Sunday", "video_link_HERE")');
		
		
		
		//thursday big top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "Billy Idol", "Big Top", 20150611, 2200, 2300, 0, 1, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "UB40s Ali Campbell Astro And Mickey Virtue", "Big Top", 20150611, 2100, 2200, 0, 1, "Thursday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (24, "Geno Washington And The Ram Jam Band", "Big Top", 20150611, 2000, 2100, 0, 1, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (25, "Noasis", "Big Top", 20150611, 1900, 2000, 0, 1, "Thursday", "video_link_HERE")');
		
		
		//friday big top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (26, "Groove Armada", "Big Top", 20150612, 2200, 2300, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (27, "Visconti And Woodmansey", "Big Top", 20150612, 2100, 2200, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (28, "Sharon Corr", "Big Top", 20150612, 2000, 2100, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (30, "Ruen Brothers", "Big Top", 20150612, 1800, 1900, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (31, "Larkin Poe", "Big Top", 20150612, 1900, 2000, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (32, "Up Down Go Machine", "Big Top", 20150612, 1700, 1800, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (33, "JJ Rosa", "Big Top", 20150612, 1600, 1700, 0, 1, "Friday", "video_link_HERE")');
		
		
		//saturday Big Top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (34, "Paul Oakenfold", "Big Top", 20150613, 2200, 2300, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (35, "Foxes", "Big Top", 20150613, 2000, 2100, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (36, "The Shires", "Big Top", 20150613, 1900, 2000, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (37, "Stiff Little Fingers", "Big Top", 20150613, 2100, 2200, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (38, "Chicks On Speed", "Big Top", 20150613, 1800, 1900, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (39, "La Femme", "Big Top", 20150613, 1700, 1800, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (40, "Sunset Sons", "Big Top", 20150613, 1600, 1700, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (41, "New City Kings", "Big Top", 20150613, 1500, 1600, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (42, "Twin Wild", "Big Top", 20150613, 1400, 1500, 0, 1, "Saturday", "video_link_HERE")');
		
		
		
		//Sunday Big Top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (43, "The Lightning Seeds", "Big Top", 20150614, 1900, 2000, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (44, "The View", "Big Top", 20150614, 1800, 1900, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (45, "The Charlatans", "Big Top", 20150614, 2200, 2300, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (46, "Ash", "Big Top", 20150614, 2000, 2100, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (47, "Coasts", "Big Top", 20150614, 1700, 1800, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (48, "Sheppard", "Big Top", 20150614, 1600, 1700, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (49, "DJ MK", "Big Top", 20150614, 2130, 2200, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (50, "DJ Q", "Big Top", 20150614, 2115, 2130, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (51, "Funk Butcher DJ", "Big Top", 20150614, 2100, 2115, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (52, "Vambo", "Big Top", 20150614, 1500, 1600, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (53, "The Bear Social", "Big Top", 20150614, 1300, 1400, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (29, "Pretty Vicious", "Big Top", 20150614, 1400, 1500, 0, 1, "Sunday", "video_link_HERE")');
		
		//Friday Hard Rock Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (54, "858 Orbitals Paul Hartnoll", "Hard Rock Stage", 20150612, 2200, 2300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (55, "Ben Montague", "Hard Rock Stage", 20150612, 2100, 2200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (56, "The High Kings", "Hard Rock Stage", 20150612, 2000, 2100, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (57, "Bethia Beadman", "Hard Rock Stage", 20150612, 1900, 2000, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (58, "Claydon Connor", "Hard Rock Stage", 20150612, 1800, 1900, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (59, "The Carnabys", "Hard Rock Stage", 20150612, 1700, 1800, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (60, "Germein Sisters", "Hard Rock Stage", 20150612, 1600, 1700, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (61, "Little Eye", "Hard Rock Stage", 20150612, 1500, 1600, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (62, "Honey Ryder", "Hard Rock Stage", 20150612, 1400, 1500, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (63, "King Eider", "Hard Rock Stage", 20150612, 1300, 1400, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (64, "Pronghorn", "Hard Rock Stage", 20150612, 1200, 1300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (65, "Tim Arnold", "Hard Rock Stage", 20150612, 1100, 1200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (66, "Sam Jones", "Hard Rock Stage", 20150612, 1000, 1100, 0, 2, "Friday", "video_link_HERE")');
		
		
		
		//thursday jack rocks
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (105, "Bully Bones", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (98, "The Franklys", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (100, "The Watchmakers", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (89, "Jolta", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (80, "The Sherlocks", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (83, "Bulletproof Bomb", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		
		
		//friday jack rocks Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (68, "Black Rivers", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (71, "Eugene Mcguiness", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (74, "Young Kato", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (82, "The Slow Readers Club", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (86, "Man And The Echo", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (87, "Hidden Charms", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (91, "Alias Kid", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (92, "Cut", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (93, "Glass Caves", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (94, "Kassassin Street", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
			
		
	
		//saturday jacks rocks
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (97, "Decoy Jet", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (99, "Conor Houston", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (90, "Sly Digs", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (88, "The Jacques", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (102, "Judas", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (81, "Sugarmen", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (84, "Hyena", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (77, "Storms", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (72, "Findlay", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (75, "Dexters", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (67, "Dave Mccabe And The Ramifications", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (96, "Bang Bang Romeo", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (70, "Little Barrie", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		
		
		//sun jack rocks
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (101, "Medicine Men", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (103, "The SSS", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (104, "Savage Nomads", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (95, "Tijuana Bibles", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (79, "The Sundowners", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (76, "Life in Film", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (78, "Serpent Power", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (73, "Man Made", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (69, "Kid Wave", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (85, "Trampolene", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		
		
	
	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		
		
		//bands change from friday to thurs on hard rock
		tx.executeSql('UPDATE bands SET day=20150611, day_name="Thursday" WHERE id=64');
		
		//bands change from friday to saturday on hard rock stage
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=57');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=59');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=61');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=62');
		
		//band change from friday to sunday hard rock stage.
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=54');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=55');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=56');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=63');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=66');
		
		//bands to delete
		tx.executeSql('DELETE FROM bands WHERE id=65');
		
		//bands to thurs hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (106, "Diesel Park West", "Hard Rock Stage", 20150611, 2200, 2300, 0, 2, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (107, "30Ten", "Hard Rock Stage", 20150611, 2100, 2200, 0, 2, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (108, "Nick Cane", "Hard Rock Stage", 20150611, 2000, 2100, 0, 2, "Thursday", "video_link_HERE")');
		
		//bands added friday hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (109, "Parker", "Hard Rock Stage", 20150612, 2200, 2300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (110, "LiA", "Hard Rock Stage", 20150612, 2100, 2200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (111, "Kerri Watt", "Hard Rock Stage", 20150612, 2000, 2100, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (112, "Arno Carstens", "Hard Rock Stage", 20150612, 1900, 2000, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (113, "Novatones", "Hard Rock Stage", 20150612, 1800, 1900, 0, 2, "Friday", "video_link_HERE")');
		
		//saturday bands added hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (114, "Eddie And The Robbers", "Hard Rock Stage", 20150613, 2200, 2300, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (115, "The Ravels", "Hard Rock Stage", 20150613, 2000, 2100, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (116, "Curran", "Hard Rock Stage", 20150613, 1900, 2000, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (117, "The Dirty Strangers", "Hard Rock Stage", 20150613, 1800, 1900, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (118, "Kenneth J Nash", "Hard Rock Stage", 20150613, 1700, 1800, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (119, "Fantasy", "Hard Rock Stage", 20150613, 1600, 1700, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (120, "Johnny Lucas", "Hard Rock Stage", 20150613, 1500, 1600, 0, 2, "Saturday", "video_link_HERE")');
		
		//sunday hard rock added bands
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (121, "The Soho Hobo", "Hard Rock Stage", 20150614, 2100, 2200, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (122, "Skinny Living", "Hard Rock Stage", 20150614, 2000, 2100, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (123, "Red Sky July", "Hard Rock Stage", 20150614, 1900, 2000, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (124, "Los Pacaminos", "Hard Rock Stage", 20150614, 1800, 1900, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (125, "The Nelson Brothers", "Hard Rock Stage", 20150614, 1700, 1800, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (126, "Ella Janes", "Hard Rock Stage", 20150614, 1600, 1700, 0, 2, "Sunday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (127, "Thundernauts", "Hard Rock Stage", 20150614, 1500, 1600, 0, 2, "Sunday", "video_link_HERE")');
	});
	
	
	//updates here
	db.transaction(function(tx){
		
		//insertions sunday
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (128, "Dreamer Joe", "Main Stage", 20150614, 1110, 1135, 0, 0, "Sunday", "video_link_HERE")');
		//insertions saturday
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (129, "Charlie Hedges", "Big Top", 20150613, 2200, 2330, 0, 1, "Saturday", "video_link_HERE")');
		
		tx.executeSql('DELETE FROM bands WHERE id=65');//delete tim arnold as soho hobo is him
tx.executeSql('UPDATE bands SET start_time=2015, finish_time=2100, band_name="Tim Arnold The Soho Hobo" WHERE id=121');
		
		
		
		//update times fri main stage
tx.executeSql('UPDATE bands SET start_time=1600, finish_time=1630 WHERE id=7');
tx.executeSql('UPDATE bands SET start_time=1655, finish_time=1725 WHERE id=6');
tx.executeSql('UPDATE bands SET start_time=1755, finish_time=1850 WHERE id=4');
tx.executeSql('UPDATE bands SET start_time=1920, finish_time=2015 WHERE id=3');
tx.executeSql('UPDATE bands SET start_time=2045, finish_time=2200 WHERE id=1');
tx.executeSql('UPDATE bands SET start_time=2230, finish_time=0000 WHERE id=2');
		//sat times main stage
tx.executeSql('UPDATE bands SET start_time=1430, finish_time=1510 WHERE id=13');
tx.executeSql('UPDATE bands SET start_time=1540, finish_time=1620 WHERE id=5');
tx.executeSql('UPDATE bands SET start_time=1650, finish_time=1730 WHERE id=12');
tx.executeSql('UPDATE bands SET start_time=1800, finish_time=1850 WHERE id=11');
tx.executeSql('UPDATE bands SET start_time=1920, finish_time=2010 WHERE id=8');
tx.executeSql('UPDATE bands SET start_time=2040, finish_time=2140 WHERE id=9');
tx.executeSql('UPDATE bands SET start_time=2210, finish_time=0000 WHERE id=10');

	//sun main times
tx.executeSql('UPDATE bands SET start_time=1200, finish_time=1230 WHERE id=21');
tx.executeSql('UPDATE bands SET start_time=1300, finish_time=1340 WHERE id=19');
tx.executeSql('UPDATE bands SET start_time=1410, finish_time=1510 WHERE id=20');
tx.executeSql('UPDATE bands SET start_time=1540, finish_time=1620 WHERE id=14');
tx.executeSql('UPDATE bands SET start_time=1650, finish_time=1735 WHERE id=15');
tx.executeSql('UPDATE bands SET start_time=1805, finish_time=1855 WHERE id=16');
tx.executeSql('UPDATE bands SET start_time=1925, finish_time=2025 WHERE id=17');
tx.executeSql('UPDATE bands SET start_time=2055, finish_time=2255 WHERE id=18');
		
		//thurs big top
tx.executeSql('UPDATE bands SET start_time=1800, finish_time=1840 WHERE id=25');
tx.executeSql('UPDATE bands SET start_time=1905, finish_time=2000 WHERE id=24');
tx.executeSql('UPDATE bands SET start_time=2030, finish_time=2130 WHERE id=23');
tx.executeSql('UPDATE bands SET start_time=2200, finish_time=2300 WHERE id=22');


		//fri big top
tx.executeSql('UPDATE bands SET start_time=1630, finish_time=1700 WHERE id=33');
tx.executeSql('UPDATE bands SET start_time=1730, finish_time=1800 WHERE id=32');
tx.executeSql('UPDATE bands SET start_time=1845, finish_time=1925 WHERE id=30');
tx.executeSql('UPDATE bands SET start_time=1955, finish_time=2035 WHERE id=31');
tx.executeSql('UPDATE bands SET start_time=2105, finish_time=2145 WHERE id=28');
tx.executeSql('UPDATE bands SET start_time=2215, finish_time=2315 WHERE id=27');
tx.executeSql('UPDATE bands SET start_time=2345, finish_time=0100 WHERE id=26');

		//sat big top
tx.executeSql('UPDATE bands SET start_time=1245, finish_time=1320 WHERE id=42');
tx.executeSql('UPDATE bands SET start_time=1345, finish_time=1420 WHERE id=41');
tx.executeSql('UPDATE bands SET start_time=1450, finish_time=1530 WHERE id=40');
tx.executeSql('UPDATE bands SET start_time=1600, finish_time=1640 WHERE id=39');
tx.executeSql('UPDATE bands SET start_time=1710, finish_time=1755 WHERE id=38');
tx.executeSql('UPDATE bands SET start_time=1825, finish_time=1910 WHERE id=36');
tx.executeSql('UPDATE bands SET start_time=1940, finish_time=2025 WHERE id=35');
tx.executeSql('UPDATE bands SET start_time=2055, finish_time=2155 WHERE id=37');
tx.executeSql('UPDATE bands SET start_time=2340, finish_time=0100 WHERE id=34');

		//sun big top
tx.executeSql('UPDATE bands SET start_time=1115, finish_time=1135 WHERE id=53');
tx.executeSql('UPDATE bands SET start_time=1200, finish_time=1230 WHERE id=52');
tx.executeSql('UPDATE bands SET start_time=1300, finish_time=1335 WHERE id=29');
tx.executeSql('UPDATE bands SET start_time=1405, finish_time=1445 WHERE id=48');
tx.executeSql('UPDATE bands SET start_time=1515, finish_time=1600 WHERE id=47');
tx.executeSql('UPDATE bands SET start_time=1630, finish_time=1715 WHERE id=44');
tx.executeSql('UPDATE bands SET start_time=1745, finish_time=1840 WHERE id=43');
tx.executeSql('UPDATE bands SET start_time=1910, finish_time=2010 WHERE id=46');
tx.executeSql('UPDATE bands SET start_time=2025, finish_time=2110 WHERE id=49');
tx.executeSql('UPDATE bands SET start_time=2110, finish_time=2140 WHERE id=51');
tx.executeSql('UPDATE bands SET start_time=2140, finish_time=2225 WHERE id=50');
tx.executeSql('UPDATE bands SET start_time=2240, finish_time=0000 WHERE id=45');
		
		
		//thurs hard rock
tx.executeSql('UPDATE bands SET start_time=1815, finish_time=1845 WHERE id=108');
tx.executeSql('UPDATE bands SET start_time=1900, finish_time=1930 WHERE id=107');
tx.executeSql('UPDATE bands SET start_time=1945, finish_time=2030 WHERE id=64');
tx.executeSql('UPDATE bands SET start_time=2045, finish_time=2145 WHERE id=106');

		//fri hard rock
tx.executeSql('UPDATE bands SET start_time=1615, finish_time=1645 WHERE id=113');
tx.executeSql('UPDATE bands SET start_time=1700, finish_time=1730 WHERE id=58');
tx.executeSql('UPDATE bands SET start_time=1745, finish_time=1820 WHERE id=112');
tx.executeSql('UPDATE bands SET start_time=1845, finish_time=1925 WHERE id=60');
tx.executeSql('UPDATE bands SET start_time=1945, finish_time=2030 WHERE id=111');
tx.executeSql('UPDATE bands SET start_time=2045, finish_time=2130 WHERE id=110');
tx.executeSql('UPDATE bands SET start_time=2145, finish_time=2230 WHERE id=109');

		//sat hard rock
tx.executeSql('UPDATE bands SET start_time=1215, finish_time=1245 WHERE id=120');
tx.executeSql('UPDATE bands SET start_time=1300, finish_time=1330 WHERE id=57');
tx.executeSql('UPDATE bands SET start_time=1340, finish_time=1420 WHERE id=119');
tx.executeSql('UPDATE bands SET start_time=1430, finish_time=1510 WHERE id=118');
tx.executeSql('UPDATE bands SET start_time=1830, finish_time=1915 WHERE id=116');
tx.executeSql('UPDATE bands SET start_time=1930, finish_time=2015 WHERE id=115');
tx.executeSql('UPDATE bands SET start_time=2030, finish_time=2115 WHERE id=61');
tx.executeSql('UPDATE bands SET start_time=2130, finish_time=2220 WHERE id=59');
tx.executeSql('UPDATE bands SET start_time=2345, finish_time=0030 WHERE id=114');

		//sun hard rock
tx.executeSql('UPDATE bands SET start_time=1200, finish_time=1225 WHERE id=127');
tx.executeSql('UPDATE bands SET start_time=1235, finish_time=1305 WHERE id=126');
tx.executeSql('UPDATE bands SET start_time=1325, finish_time=1425 WHERE id=66');
tx.executeSql('UPDATE bands SET start_time=1415, finish_time=1445 WHERE id=55');
tx.executeSql('UPDATE bands SET start_time=1500, finish_time=1530 WHERE id=125');
tx.executeSql('UPDATE bands SET start_time=1530, finish_time=1630 WHERE id=62');
tx.executeSql('UPDATE bands SET start_time=1545, finish_time=1615 WHERE id=124');
tx.executeSql('UPDATE bands SET start_time=1630, finish_time=1710 WHERE id=63');
tx.executeSql('UPDATE bands SET start_time=1700, finish_time=1800 WHERE id=117');
tx.executeSql('UPDATE bands SET start_time=1725, finish_time=1800 WHERE id=56');
tx.executeSql('UPDATE bands SET start_time=1820, finish_time=1900 WHERE id=123');
tx.executeSql('UPDATE bands SET start_time=1915, finish_time=2000 WHERE id=122');
tx.executeSql('UPDATE bands SET start_time=2230, finish_time=2300 WHERE id=54');
		
		
	});
	
	
	db.transaction(function(tx){
		//insert white boy and dios mio to sunday of jack rocks
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (130, "White Boy", "Jack Rocks Stage", 20150614, 2045, 2115, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (131, "Dios Mio", "Jack Rocks Stage", 20150614, 1210, 1235, 0, 3, "Sunday", "video_link_HERE")');
		
		
		
		
		//update bands to playing on thursday jack rocks
tx.executeSql('UPDATE bands SET start_time=1800, finish_time=1825, day=20150611, day_name="Thursday" WHERE id=105');
tx.executeSql('UPDATE bands SET start_time=1840, finish_time=1905, day=20150611, day_name="Thursday" WHERE id=98');
tx.executeSql('UPDATE bands SET start_time=1920, finish_time=1950, day=20150611, day_name="Thursday" WHERE id=100');
tx.executeSql('UPDATE bands SET start_time=2010, finish_time=2040, day=20150611, day_name="Thursday" WHERE id=89');
tx.executeSql('UPDATE bands SET start_time=2100, finish_time=2130, day=20150611, day_name="Thursday" WHERE id=80');
tx.executeSql('UPDATE bands SET start_time=2200, finish_time=2230, day=20150611, day_name="Thursday" WHERE id=83');

		//jack rock fri times
tx.executeSql('UPDATE bands SET start_time=1600, finish_time=1625 WHERE id=93');
tx.executeSql('UPDATE bands SET start_time=1640, finish_time=1705 WHERE id=87');
tx.executeSql('UPDATE bands SET start_time=1720, finish_time=1745 WHERE id=91');
tx.executeSql('UPDATE bands SET start_time=1800, finish_time=1825 WHERE id=92');
tx.executeSql('UPDATE bands SET start_time=1840, finish_time=1905 WHERE id=86');
tx.executeSql('UPDATE bands SET start_time=1920, finish_time=1950 WHERE id=82');
tx.executeSql('UPDATE bands SET start_time=2020, finish_time=2050 WHERE id=94');
tx.executeSql('UPDATE bands SET start_time=2100, finish_time=2140 WHERE id=71');
tx.executeSql('UPDATE bands SET start_time=2200, finish_time=2230 WHERE id=74');
tx.executeSql('UPDATE bands SET start_time=2300, finish_time=2345 WHERE id=68');

		//jack rocks sat times 
tx.executeSql('UPDATE bands SET start_time=1200, finish_time=1225, day=20150613, day_name="Saturday" WHERE id=97');
tx.executeSql('UPDATE bands SET start_time=1240, finish_time=1305, day=20150613, day_name="Saturday" WHERE id=99');
tx.executeSql('UPDATE bands SET start_time=1320, finish_time=1345, day=20150613, day_name="Saturday" WHERE id=96');
tx.executeSql('UPDATE bands SET start_time=1400, finish_time=1425, day=20150613, day_name="Saturday" WHERE id=90');
tx.executeSql('UPDATE bands SET start_time=1440, finish_time=1505, day=20150613, day_name="Saturday" WHERE id=88');
tx.executeSql('UPDATE bands SET start_time=1520, finish_time=1545, day=20150613, day_name="Saturday" WHERE id=102');
tx.executeSql('UPDATE bands SET start_time=1600, finish_time=1630, day=20150613, day_name="Saturday" WHERE id=81');
tx.executeSql('UPDATE bands SET start_time=1645, finish_time=1715, day=20150613, day_name="Saturday" WHERE id=84');
tx.executeSql('UPDATE bands SET start_time=1730, finish_time=1800, day=20150613, day_name="Saturday" WHERE id=77');
tx.executeSql('UPDATE bands SET start_time=1830, finish_time=1900, day=20150613, day_name="Saturday" WHERE id=72');
tx.executeSql('UPDATE bands SET start_time=1930, finish_time=2000, day=20150613, day_name="Saturday" WHERE id=75');
tx.executeSql('UPDATE bands SET start_time=2020, finish_time=2100, day=20150613, day_name="Saturday" WHERE id=70');
tx.executeSql('UPDATE bands SET start_time=2130, finish_time=2215, day=20150613, day_name="Saturday" WHERE id=67');

		//jack rocks sun times
tx.executeSql('UPDATE bands SET start_time=1130, finish_time=1155, day=20150614, day_name="Sunday" WHERE id=103');
tx.executeSql('UPDATE bands SET start_time=1245, finish_time=1315, day=20150614, day_name="Sunday" WHERE id=101');
tx.executeSql('UPDATE bands SET start_time=1330, finish_time=1400, day=20150614, day_name="Sunday" WHERE id=104');
tx.executeSql('UPDATE bands SET start_time=1415, finish_time=1445, day=20150614, day_name="Sunday" WHERE id=95');
tx.executeSql('UPDATE bands SET start_time=1500, finish_time=1530, day=20150614, day_name="Sunday" WHERE id=85');
tx.executeSql('UPDATE bands SET start_time=1600, finish_time=1630, day=20150614, day_name="Sunday" WHERE id=76');
tx.executeSql('UPDATE bands SET start_time=1645, finish_time=1715, day=20150614, day_name="Sunday" WHERE id=79');
tx.executeSql('UPDATE bands SET start_time=1730, finish_time=1800, day=20150614, day_name="Sunday" WHERE id=78');
tx.executeSql('UPDATE bands SET start_time=1820, finish_time=1850, day=20150614, day_name="Sunday" WHERE id=73');
tx.executeSql('UPDATE bands SET start_time=1920, finish_time=2000, day=20150614, day_name="Sunday" WHERE id=69');
		
		
		//strongbow tree add thursday
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (132, "Copyright", "Strongbow Tree", 20150611, 1800, 2100, 0, 4, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (133, "Izzy Trixx", "Strongbow Tree", 20150611, 2100, 2300, 0, 4, "Thursday", "video_link_HERE")');
		
		//strongbow tree fri
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (134, "Rae", "Strongbow Tree", 20150612, 1600, 1800, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (135, "Luke Soloman", "Strongbow Tree", 20150612, 2100, 2300, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (136, "Izzy Trixx", "Strongbow Tree", 20150612, 2300, 0100, 0, 4, "Friday", "video_link_HERE")');
		
		//strongbow tree sat
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (137, "CD", "Strongbow Tree", 20150613, 1200, 1300, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (138, "Copyright", "Strongbow Tree", 20150613, 1300, 1500, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (139, "Luke Soloman", "Strongbow Tree", 20150613, 1500, 1800, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (140, "Rae", "Strongbow Tree", 20150613, 1800, 1900, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (141, "Sandy Rivera", "Strongbow Tree", 20150613, 2100, 0000, 0, 4, "Saturday", "video_link_HERE")');
		
		//strongbow tree sun
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (142, "CD", "Strongbow Tree", 20150614, 1200, 1300, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (143, "Luke Soloman", "Strongbow Tree", 20150614, 1300, 1500, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (144, "Rae", "Strongbow Tree", 20150614, 1500, 1800, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (145, "Sandy Rivera", "Strongbow Tree", 20150614, 1800, 1900, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (146, "Copyright", "Strongbow Tree", 20150614, 2100, 0000, 0, 4, "Sunday", "video_link_HERE")');
		
		
		set_up_main_page();
	});
}













